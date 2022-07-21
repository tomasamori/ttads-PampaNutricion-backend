import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken'
import config from '../config';
import Rol from '../models/Rol';

export const createUsuario = async (req, res) => {

    const {usuario, email, password, roles} = req.body;

    const newUsuario = new Usuario({
        usuario,
        email,
        password: await Usuario.encryptPassword(password)
    });

    if (roles) {
        const foundRoles = await Rol.find({name: {$in: roles}});
        newUsuario.roles = foundRoles.map(rol => rol._id);
    }
    else
    {
        const rol = await Rol.findOne({name: "cliente"});
        newUsuario.roles = [rol._id];
    }

    const savedUsuario = await newUsuario.save();

    const token = jwt.sign({id: savedUsuario._id},config.SECRET,{
        expiresIn: 86400 // 24 hours
    });

    res.status(200).json({token})

};

export const getUsuarios = async (req, res) => {

    const usuarios = await Usuario.find().populate('roles');
    res.status(200).json(usuarios);

};

export const getUsuarioById = async (req, res) => {

    const usuario = await Usuario.findById(req.params.id).populate('roles');
    res.status(200).json(usuario);

};

export const updateUsuarioById = async (req, res) => {

    const updatedUsuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedUsuario);

};

export const deleteUsuarioById = async (req, res) => {

    const {id}=req.params;
    await Usuario.findByIdAndDelete(id);
    res.status(204).json();

};