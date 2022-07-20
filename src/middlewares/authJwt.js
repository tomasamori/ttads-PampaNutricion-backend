import jwt from 'jsonwebtoken';
import config from '../config';
import Usuario from '../models/Usuario';
import Rol from '../models/Rol';

export const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: 'No se proporcionó el token'});

        const decoded = jwt.verify(token, config.SECRET);
        req.id = decoded.id;

        const usuario = await Usuario.findById(req.id, {password: 0});
        if (!usuario) return res.status(404).json({message: 'El usuario no existe'});

        next()
    } catch (error) {
        return res.status(401).json({message: 'No autorizado'});
    }
};

export const isEmpleado = async (req, res, next) => {

    const usuario = await Usuario.findById(req.id);
    const roles = await Rol.find({_id: {$in: usuario.roles}});

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'empleado') {
            next();
            return;
        }
    }
    return res.status(403).json({message: 'Requiere rol de empleado'});

};

export const isAdmin = async (req, res, next) => {

    const usuario = await Usuario.findById(req.id);
    const roles = await Rol.find({_id: {$in: usuario.roles}});

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
            next();
            return;
        }
    }
    return res.status(403).json({message: 'Requiere rol de administrador'});

};