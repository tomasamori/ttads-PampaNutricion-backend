import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken'
import config from '../config';
import Rol from '../models/Rol';

export const signUp = async(req, res) => {

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
}

export const signIn = async(req, res) => {

    const usuarioFound = await Usuario.findOne({email: req.body.email}).populate('roles');

    if (!usuarioFound) {
        return res.status(400).json({message: "No se encontró el usuario"});
    }

    const matchPassword = await Usuario.comparePassword(req.body.password, usuarioFound.password);

    if (!matchPassword) return res.status(401).json({token: 'null', message: "Contraseña invalida"});

    const token = jwt.sign({id: usuarioFound._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    })

    res.json({token});

}