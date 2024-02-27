import Localidad from '../models/Localidad';

export const createLocalidad = async (req, res) => {

    const {codPostal, nombre} = req.body;
    const newLocalidad = new Localidad({codPostal, nombre});
    const localidadSaved = await newLocalidad.save();
    res.status(201).json(localidadSaved);

};

export const getLocalidades = async (req, res) => {

    const localidades = await Localidad.find();
    res.status(200).json(localidades);

};

export const getLocalidadById = async (req, res) => {

    const localidad = await Localidad.findById(req.params.id);
    res.status(200).json(localidad);

};

export const updateLocalidadById = async (req, res) => {

    const updatedLocalidad = await Localidad.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedLocalidad);

};

export const deleteLocalidadById = async (req, res) => {

    const {id}=req.params;
    await Localidad.findByIdAndDelete(id);
    res.status(204).json();

};

export const findSucursalByLocalidad = async (req, res) => {
    try {
        const { id } = req.params; // Extrae la ID de la localidad de los parámetros de la solicitud
        const localidad = await Localidad.findOneOrFail({ id }); // Encuentra la localidad por ID
        const sucursales = await Sucursal.find({ localidad }); // Encuentra las sucursales con la localidad encontrada
        const haySucursales = sucursales.length > 0; // Verifica si hay sucursales asociadas
        res.status(200).json({ haySucursales }); // Devuelve true si hay sucursales asociadas, false si no hay sucursales
    } catch (error) {
        console.error('Error al verificar sucursales por localidad:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};