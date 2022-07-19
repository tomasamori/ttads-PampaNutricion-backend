import Sucursal from '../models/Sucursal';

export const createSucursal = async (req, res) => {

    const {nombre, direccion, localidad} = req.body;
    const newSucursal = new Sucursal({nombre, direccion, localidad});
    const sucursalSaved = await newSucursal.save();
    res.status(201).json(sucursalSaved);

};

export const getSucursales = async (req, res) => {

    const sucursales = await Sucursal.find().populate('localidad');
    res.status(200).json(sucursales);

};

export const getSucursalById = async (req, res) => {

    const sucursal = await Sucursal.findById(req.params.id).populate('localidad');
    res.status(200).json(sucursal);

};

export const updateSucursalById = async (req, res) => {

    const updatedSucursal = await Sucursal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedSucursal);

};

export const deleteSucursalById = async (req, res) => {

    const {id}=req.params;
    await Sucursal.findByIdAndDelete(id);
    res.status(204).json();

};