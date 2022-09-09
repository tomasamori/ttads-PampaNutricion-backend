import Cliente from '../models/Cliente';

export const createCliente = async (req, res) => {

    const {usuario, cuil, cuit, nombre, apellido, fechaNacimiento, direccion, telefono, razonSocial} = req.body;
    const newCliente = new Cliente({usuario, cuil, cuit, nombre, apellido, fechaNacimiento, direccion, telefono, razonSocial});
    const clienteSaved = await newCliente.save();
    res.status(201).json(clienteSaved);

};

export const getClientes = async (req, res) => {

    const clientes = await Cliente.find().populate('usuario');
    res.status(200).json(clientes);

};

export const getClienteById = async (req, res) => {

    const cliente = await Cliente.findById(req.params.id).populate('usuario');
    res.status(200).json(cliente);

};

export const updateClienteById = async (req, res) => {

    const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedCliente);

};

export const deleteClienteById = async (req, res) => {

    const {id}=req.params;
    await Cliente.findByIdAndDelete(id);
    res.status(204).json();

};