const mongoose = require('mongoose');
import router from '../routes/api/v1/producto';
const {Schema, model} = mongoose;

const ProductoSchema = new mongoose.Schema( {
    idProducto: String,
    marca: String,
    nombre: String,
    descripcion: String,
    peso: Number,
    tipoMascota: {type: Schema.Types.ObjectId, ref: 'TipoMascota'}
});

module.exports = mongoose.model('Producto', ProductoSchema);