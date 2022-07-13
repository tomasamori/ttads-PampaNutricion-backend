const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema( {
    idUsuario: String,
    usuario: String,
    password: String,
    cuil: String,
    email: String,
    fechaNacimiento: Date,
    direccion: String,
    telefono: String,
    legajo: String,
    nombre: String,
    apellido: String
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);