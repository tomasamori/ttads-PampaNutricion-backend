import Precio from '../models/Precio';

export const createPrecio = async (req, res) => {

    try {
        const { producto, fechaDesde, valor } = req.body;
        const newPrecio = new Precio({ producto, fechaDesde, valor });
        const precioSaved = await newPrecio.save();
        res.status(201).json(precioSaved);
    } catch (error) {
        return res.status(500).json(error);
    }

};

export const getPrecios = async (req, res) => {

    try {
        const precios = await Precio.find();
        res.status(200).json(precios);
    } catch (error) {
        return res.status(500).json(error);
    }

};

export const getPrecioById = async (req, res) => {

    try {
        const precio = await Precio.findById(req.params.id);
        res.status(200).json(precio);
    } catch (error) {
        return res.status(500).json(error);
    }

};

export const updatePrecioById = async (req, res) => {

    try {
        const updatedPrecio = await Precio.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(204).json(updatedPrecio);
    } catch (error) {
        return res.status(500).json(error);
    }

};

export const deletePrecioById = async (req, res) => {

    try {
        const { id } = req.params;
        await Precio.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        return res.status(500).json(error);
    }

};