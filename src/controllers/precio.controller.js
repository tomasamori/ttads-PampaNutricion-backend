import Precio from '../models/Precio';

export const createPrecio = async (req, res) => {

    const {producto, fechaDesde, valor} = req.body;
    const newPrecio = new Precio({producto, fechaDesde, valor});
    const precioSaved = await newPrecio.save();
    res.status(201).json(precioSaved);

};

export const getPrecios = async (req, res) => {

    const precios = await Precio.find();
    res.status(200).json(precios);

};

export const getPrecioById = async (req, res) => {

    const precio = await Precio.findById(req.params.id);
    res.status(200).json(precio);

};

export const updatePrecioById = async (req, res) => {

    const updatedPrecio = await Precio.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedPrecio);

};

export const deletePrecioById = async (req, res) => {

    const {id}=req.params;
    await Precio.findByIdAndDelete(id);
    res.status(204).json();

};