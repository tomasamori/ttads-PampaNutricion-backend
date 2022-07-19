import Proveedor from '../models/Proveedor';

export const createProveedor = async (req, res) => {

    const {cuil, cuit, razonSocial, email, telefono} = req.body;
    const newProveedor = new Proveedor({cuil, cuit, razonSocial, email, telefono});
    const proveedorSaved = await newProveedor.save();
    res.status(201).json(proveedorSaved);

};

export const getProveedores = async (req, res) => {

    const proveedores = await Proveedor.find();
    res.status(200).json(proveedores);

};

export const getProveedorById = async (req, res) => {

    const proveedor = await Proveedor.findById(req.params.id);
    res.status(200).json(proveedor);

};

export const updateProveedorById = async (req, res) => {

    const updatedProveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedProveedor);

};

export const deleteProveedorById = async (req, res) => {

    const {id}=req.params;
    await Proveedor.findByIdAndDelete(id);
    res.status(204).json();

};