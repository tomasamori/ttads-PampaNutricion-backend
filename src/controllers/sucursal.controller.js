import Sucursal from '../models/Sucursal';

export const createSucursal = async (req, res) => {

    try {
        const { nombre, direccion, localidad, foto } = req.body;
        const newSucursal = new Sucursal({ nombre, direccion, localidad, foto });
        const sucursalSaved = await newSucursal.save();
        res.status(201).json(sucursalSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getSucursales = async (req, res) => {

    try {
        const sucursales = await Sucursal.find().populate('localidad');
        res.status(200).json(sucursales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getSucursalById = async (req, res) => {

    try {
        const sucursal = await Sucursal.findById(req.params.id).populate('localidad');
        res.status(200).json(sucursal);
    } catch (error) {
        res.status(500).json({ message: error.message });

    };
};

export const updateSucursalById = async (req, res) => {

    try {
        const updatedSucursal = await Sucursal.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(204).json(updatedSucursal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const deleteSucursalById = async (req, res) => {

    try {
        const { id } = req.params;
        await Sucursal.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};