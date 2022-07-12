const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema( {
    idProducto: String,
    marca: String,
    nombre: String,
    descripcion: String,
    peso: Number
});

module.exports = mongoose.model('Producto', ProductoSchema);