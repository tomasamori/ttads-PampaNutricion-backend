import {ROLES} from '../models/Rol';
import Cliente from "../models/Cliente";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {

    const cliente = await Cliente.findOne({usuario: req.body.usuario});
    if (cliente) return res.status(400).json({message: 'El usuario ya existe'});

    const email = await Cliente.findOne({email: req.body.email});
    if (email) return res.status(400).json({message: 'El email ya existe'});

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