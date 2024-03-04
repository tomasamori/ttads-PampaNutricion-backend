import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken'
import config from '../config';
import Rol from '../models/Rol';
import Pedido from '../models/Pedido';

export const createUsuario = async (req, res) => {

    try {
        const { usuario, password, email, rol, cuil, nombre, fechaNacimiento, direccion, telefono } = req.body;

        const newUsuario = new Usuario({
            usuario,
            email,
            password: await Usuario.encryptPassword(password),
            cuil,
            nombre,
            fechaNacimiento,
            direccion,
            telefono
        });

        if (rol) {
            const foundRol = await Rol.findOne({ _id: rol });
            newUsuario.rol = foundRol._id;
        }
        else {
            const rol = await Rol.findOne({ name: "cliente" });
            newUsuario.rol = rol._id;
        }

        const savedUsuario = await newUsuario.save();

        const token = jwt.sign({ id: savedUsuario._id }, config.SECRET, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.find().populate('rol');
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getUsuarioById = async (req, res) => {

    try {
        const usuario = await Usuario.findById(req.params.id).populate('rol');
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const updateUsuarioById = async (req, res) => {

    try {
        const updatedUsuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(204).json(updatedUsuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const deleteUsuarioById = async (req, res) => {

    try {
        const { id } = req.params;
        await Usuario.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const findOrdersByUser = async (req, res) => {
    try {
        const {id}=req.params;
        const usuario = await Usuario.findById(id); // Encuentra el usuario por ID
        const pedidos = await Pedido.find({ usuario: usuario.id }); // Encuentra los pedidos con el usuario encontrado
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};