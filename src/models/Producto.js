import {Schema, model} from 'mongoose';

const ProductoSchema = new Schema({
    marca: String,
    nombre: String,
    descripcion: String,
    peso: String,
    imgUrl:String,
    categoria:String,
    promo: Boolean
},{
    timestamps: true,
    versionKey: false
});

export default model('Producto', ProductoSchema);