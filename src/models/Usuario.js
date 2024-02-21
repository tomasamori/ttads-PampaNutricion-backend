import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const UsuarioSchema = new Schema({
    usuario: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    roles: [{type: Schema.Types.ObjectId, ref: 'Rol'}],
    cuil: String,
    nombre: String,
    fechaNacimiento: Date,
    direccion: String,
    telefono: String,
    resetLink: {data: String, default: ''}
}, {
    timestamps: true,
    versionKey: false,
    collection: 'usuarios'
});

//se puede poner como un hook
UsuarioSchema.statics.encryptPassword = async(password) => {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

UsuarioSchema.statics.comparePassword = async (password, receivedPassword) => {

    return await bcrypt.compare(password, receivedPassword);

};

export default model('Usuario', UsuarioSchema);