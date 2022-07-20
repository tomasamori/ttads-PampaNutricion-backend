import Empleado from '../models/Empleado';

export const createEmpleado = async (req, res) => {

    const {usuario, cuil, nombre, apellido, fechaNacimiento, direccion, telefono, legajo} = req.body;
    const newEmpleado = new Empleado({usuario, cuil, nombre, apellido, fechaNacimiento, direccion, telefono, legajo});
    const empleadoSaved = await newEmpleado.save();
    res.status(201).json(empleadoSaved);

};

export const getEmpleados = async (req, res) => {

    const empleados = await Empleado.find().populate('usuario');
    res.status(200).json(empleados);

};

export const getEmpleadoById = async (req, res) => {

    const empleado = await Empleado.findById(req.params.id);
    res.status(200).json(empleado);

};

export const updateEmpleadoById = async (req, res) => {

    const updatedEmpleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedEmpleado);

};

export const deleteEmpleadoById = async (req, res) => {

    const {id}=req.params;
    await Empleado.findByIdAndDelete(id);
    res.status(204).json();

};