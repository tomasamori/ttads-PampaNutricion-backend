const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
    cuit: String,
    razonSocial: String,
    email: String,
    telefono: String
}, {
    timestamps: true,
    versionKey: false,
    collection: 'proveedores'
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);