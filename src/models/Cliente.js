import {Schema, model} from 'mongoose';

const ClienteSchema = new Schema({
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'},
    cuil: String,
    cuit: String,
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    fechaNacimiento: Date,
    direccion: String,
    telefono: String,
    razonSocial: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false,
    collection: 'clientes'
});

export default model('Cliente', ClienteSchema);