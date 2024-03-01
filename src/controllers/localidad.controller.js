import Localidad from '../models/Localidad';
import Sucursal from '../models/Sucursal';

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
        const {id}=req.params;
        const localidad = await Localidad.findById(id); // Encuentra la localidad por ID
        const sucursales = await Sucursal.find({ localidad: localidad.id }); // Encuentra las sucursales con la localidad encontrada
        res.status(200).json(sucursales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

