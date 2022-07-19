import Cliente from '../models/Cliente';
import jwt from 'jsonwebtoken'
import config from '../config';
import Rol from '../models/Rol';

export const signUp = async(req, res) => {

    const {usuario, email, password, roles} = req.body;

    const newCliente = new Cliente({
        usuario,
        email,
        password: await Cliente.encryptPassword(password)
    });

    if (roles) {
        const foundRoles = await Rol.find({name: {$in: roles}});
        newCliente.roles = foundRoles.map(rol => rol._id);
    }
    else
    {
        const rol = await Rol.findOne({name: "cliente"});
        newCliente.roles = [rol._id];
    }

    const savedCliente = await newCliente.save();

    const token = jwt.sign({id: savedCliente._id},config.SECRET,{
        expiresIn: 86400 // 24 hours
    });

    res.status(200).json({token})
}

export const signIn = async(req, res) => {

    const clienteFound = await Cliente.findOne({email: req.body.email}).populate('roles');

    if (!clienteFound) {
        return res.status(400).json({message: "No se encontró el usuario"});
    }

    const matchPassword = await Cliente.comparePassword(req.body.password, clienteFound.password);

    if (!matchPassword) return res.status(401).json({token: 'null', message: "Contraseña invalida"});

    const token = jwt.sign({id: clienteFound._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    })

    res.json({token});

}