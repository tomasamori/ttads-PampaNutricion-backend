import TipoMascota from '../models/TipoMascota';

export const createTipoMascota = async (req, res) => {

    const {nombre, tamanoRaza, edad} = req.body;
    const newTipoMascota = new TipoMascota({nombre, tamanoRaza, edad});
    const tipoMascotaSaved = await newTipoMascota.save();
    res.status(201).json(tipoMascotaSaved);

};

export const getTipoMascotas = async (req, res) => {

    const tipoMascotas = await TipoMascota.find();
    res.status(200).json(tipoMascotas);

};

export const getTipoMascotaById = async (req, res) => {

    const tipoMascota = await TipoMascota.findById(req.params.id);
    res.status(200).json(tipoMascota);

};

export const updateTipoMascotaById = async (req, res) => {

    const updatedTipoMascota = await TipoMascota.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedTipoMascota);

};

export const deleteTipoMascotaById = async (req, res) => {

    const {id}=req.params;
    await TipoMascota.findByIdAndDelete(id);
    res.status(204).json();

};