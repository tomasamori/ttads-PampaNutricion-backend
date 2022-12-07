import {Schema, model} from 'mongoose';

const ProductoSchema = new Schema({
    marca: String,
    nombre: String,
    descripcion: String,
    peso: Number,
    imgUrl: String,
    tipoMascota: {type: Schema.Types.ObjectId, ref: 'TipoMascota'},
    precio: Number,
    promo: Number
},{
    timestamps: true,
    versionKey: false
});

export default model('Producto', ProductoSchema);