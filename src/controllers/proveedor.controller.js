import Proveedor from '../models/Proveedor';

export const createProveedor = async (req, res) => {

    try {
        const { cuil, cuit, razonSocial, email, telefono } = req.body;
        const newProveedor = new Proveedor({ cuil, cuit, razonSocial, email, telefono });
        const proveedorSaved = await newProveedor.save();
        res.status(201).json(proveedorSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getProveedores = async (req, res) => {

    try {
        const proveedores = await Proveedor.find();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getProveedorById = async (req, res) => {

    try {
        const proveedor = await Proveedor.findById(req.params.id);
        res.status(200).json(proveedor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const updateProveedorById = async (req, res) => {

    try {
        const updatedProveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(204).json(updatedProveedor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const deleteProveedorById = async (req, res) => {

    try {
        const { id } = req.params;
        await Proveedor.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};