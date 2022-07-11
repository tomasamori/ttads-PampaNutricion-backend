const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema( {
    idProducto: String,
    marca: String,
    nombre: String,
    descripcion: String,
    precio: String
});

module.exports = mongoose.model('Producto', ProductoSchema);