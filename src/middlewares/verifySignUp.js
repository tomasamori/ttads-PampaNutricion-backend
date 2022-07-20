import {ROLES} from '../models/Rol';
import Usuario from "../models/Usuario";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {

    const usuario = await Usuario.findOne({usuario: req.body.usuario});
    if (usuario) return res.status(400).json({message: 'El usuario se encuentra en uso'});

    const email = await Usuario.findOne({email: req.body.email});
    if (email) return res.status(400).json({message: 'El email se encuentra en uso'});

    next();

}

export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i=0; i<req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Rol ${req.body.roles[i]} no existe`
                });
            }
        }
    };

    next();

};