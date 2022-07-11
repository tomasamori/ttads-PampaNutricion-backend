const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
    idProveedor: String,
    cuil: String,
    cuit: String,
    razonSocial: String,
    email: String,
    telefono: String
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);