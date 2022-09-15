import {Schema, model} from 'mongoose';

const ProductoSchema = new Schema({
    marca: String,
    nombre: String,
    descripcion: String,
    peso: String,
    imgUrl:String,
    tipoMascota: {type: Schema.Types.ObjectId, ref: 'TipoMascota'},
    //precio: {type: Schema.Types.ObjectId, ref: 'Precio'},
    precio: String,
    categoria:String,
    promo: Number
},{
    timestamps: true,
    versionKey: false
});

export default model('Producto', ProductoSchema);;