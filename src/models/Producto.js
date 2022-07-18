import {Schema, model} from 'mongoose';

const ProductoSchema = new Schema({
    marca: String,
    nombre: String,
    descripcion: String,
    peso: String
},{
    timestamps: true,
    versionKey: false
});

export default model('Producto', ProductoSchema);