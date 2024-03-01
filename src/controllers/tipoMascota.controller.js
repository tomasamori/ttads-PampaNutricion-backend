import TipoMascota from '../models/TipoMascota';

export const createTipoMascota = async (req, res) => {

    try {
        const { nombre, tamanoRaza, edad } = req.body;
        const newTipoMascota = new TipoMascota({ nombre, tamanoRaza, edad });
        const tipoMascotaSaved = await newTipoMascota.save();
        res.status(201).json(tipoMascotaSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getTipoMascotas = async (req, res) => {

    try {
        const tipoMascotas = await TipoMascota.find();
        res.status(200).json(tipoMascotas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getTipoMascotaById = async (req, res) => {

    try {
        const tipoMascota = await TipoMascota.findById(req.params.id);
        res.status(200).json(tipoMascota);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const updateTipoMascotaById = async (req, res) => {

    try {
        const updatedTipoMascota = await TipoMascota.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(204).json(updatedTipoMascota);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const deleteTipoMascotaById = async (req, res) => {

    try {
        const { id } = req.params;
        await TipoMascota.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};