import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken'
import config from '../config';
import Rol from '../models/Rol';
import nodemailer from 'nodemailer';

export const signUp = async (req, res, next) => {

    try {
        const { usuario, email, password, rol, cuil, nombre, fechaNacimiento, direccion, telefono } = req.body;

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



        if (!rol) { // for security reasons, we don't want to recieve the roles from the register form
            const foundRol = await Rol.findOne({ name: "cliente" });
            newUsuario.rol = [foundRol._id];

            const savedUsuario = await newUsuario.save();

            res.status(200).json({ message: 'Usuario creado exitosamente' });
        }
        else {
            res.status(404).json({ message: 'No es posible asignar roles al nuevo usuario' });
            next();
            // const foundRoles = await Rol.find({name: {$in: roles}});
            // newUsuario.roles = foundRoles.map(rol => rol._id);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const signIn = async (req, res) => {

    try {
        const usuarioFound = await Usuario.findOne({ email: req.body.email }).populate('rol');
        console.log(usuarioFound);

        if (!usuarioFound) {
            return res.status(400).json({ message: "No se encontró el usuario" });
        }

        const matchPassword = await Usuario.comparePassword(req.body.password, usuarioFound.password);
        const usuarioFoundId = usuarioFound._id;
        const usuarioFoundRol = usuarioFound.rol.name;
        const usuarioFoundNombre = usuarioFound.nombre;
        const usuarioFoundCuil = usuarioFound.cuil;

        if (!matchPassword) return res.status(401).json({ token: 'null', message: "Contraseña invalida" });

        const token = jwt.sign({ id: usuarioFound._id }, config.SECRET, {
            expiresIn: 86400 // 24 hours
        })

        res.json({ token, usuarioFoundId, usuarioFoundRol, usuarioFoundNombre, usuarioFoundCuil });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const forgotPassword = async (req, res) => {

    const { email } = req.body;
    const usuarioFound = await Usuario.findOne({ email });

    if (!usuarioFound) {
        return res.status(400).json({ message: "No se encontró el usuario" });
    }

    const token = jwt.sign({ id: usuarioFound._id }, config.SECRET, { expiresIn: '10m' });

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    });

    const data = {
        from: process.env.MAIL_USERNAME,
        to: usuarioFound.email,
        subject: 'Pampa Nutrición - Recuperar contraseña',
        html: `
        <p> Hola ${usuarioFound.nombre}. Para recuperar tu contraseña, por favor realizá click en el siguiente link: ${process.env.FRONTEND_HOST_URL}/reset-password/${token} </p>
        `
    }

    try {
        await usuarioFound.updateOne({ resetLink: token });
        await transporter.sendMail(data);
        return res.status(200).json({ message: "Mail enviado con éxito" });
    } catch (error) {
        return res.status(400).json({ message: "Error en la recuperación de contraseña o en el envío de mail", error: error.message });
    }
}

export const resetPassword = async (req, res) => {
    const token = req.params.token;
    const { newPass } = req.body;

    try {
        if (!token) {
            return res.status(401).json({ message: "Link inválido" });
        }

        const decodedToken = jwt.verify(token, config.SECRET);
        const usuarioFound = await Usuario.findOne({ resetLink: token });

        if (!usuarioFound) {
            return res.status(400).json({ message: "No se encontró el usuario" });
        }

        // Actualizar la contraseña del usuario
        usuarioFound.password = await Usuario.encryptPassword(newPass);
        usuarioFound.resetLink = '';
        await usuarioFound.save();

        return res.status(200).json({ message: "Contraseña actualizada con éxito" });
    } catch (error) {
        return res.status(401).json({ message: "Link expirado o inválido" });
    }
}