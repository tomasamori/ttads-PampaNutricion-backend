import jwt from 'jsonwebtoken';
import config from '../config';
import Usuario from '../models/Usuario';
import Rol from '../models/Rol';

export const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({ message: 'No se proporcionó el token' });

        const decoded = jwt.verify(token, config.SECRET);
        req.id = decoded.id;

        const usuario = await Usuario.findById(req.id, { password: 0 });
        if (!usuario) return res.status(404).json({ message: 'El usuario no existe' });

        next()
    } catch (error) {
        return res.status(401).json({ message: 'No autorizado' });
    }
};

export const isEmpleadoOrAdmin = async (req, res, next) => {
    const id = req.headers["id"];

    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const rolEmpleado = await Rol.findOne({ name: "empleado" });
        const rolAdmin = await Rol.findOne({ name: "admin" });
        if (!rolEmpleado && !rolAdmin) {
            return res.status(404).json({ message: 'Rol de empleado no encontrado' });
        }

        if (usuario.rol.toString() === rolEmpleado._id.toString() || usuario.rol.toString() === rolAdmin._id.toString()){
            next();
        } else {
            return res.status(403).json({ message: 'Requiere rol de empleado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const isAdmin = async (req, res, next) => {
    const id = req.headers["id"];

    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const rolAdmin = await Rol.findOne({ name: "admin" });
        if (!rolAdmin) {
            return res.status(404).json({ message: 'Rol de administrador no encontrado' });
        }

        if (usuario.rol.toString() === rolAdmin._id.toString()) {
            next();
        } else {
            return res.status(403).json({ message: 'Requiere rol de administrador' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};