import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken'
import config from '../config';
import Rol from '../models/Rol';

export const signUp = async(req, res, next) => {

    const {usuario, email, password, roles, cuil, nombre, fechaNacimiento, direccion, telefono} = req.body;

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

    // for security reasons, we don't want to recieve the roles from the register form

    if (!roles) {
        const rol = await Rol.findOne({name: "cliente"});
        newUsuario.roles = [rol._id];

        const savedUsuario = await newUsuario.save();

        const token = jwt.sign({id: savedUsuario._id},config.SECRET,{
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({token})
    }
    else
    {
        res.status(404).json({message: 'No es posible asignar roles al nuevo usuario'});
        next();
        // const foundRoles = await Rol.find({name: {$in: roles}});
        // newUsuario.roles = foundRoles.map(rol => rol._id);
    }
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