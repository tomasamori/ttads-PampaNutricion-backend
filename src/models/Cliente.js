import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const ClienteSchema = new Schema({
    usuario: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    cuil: String,
    cuit: String,
    email: {type: String, unique: true},
    fechaNacimiento: Date,
    direccion: String,
    telefono: String,
    razonSocial: String,
    roles: [{type: Schema.Types.ObjectId, ref: 'Rol'}]
}, {
    timestamps: true,
    versionKey: false
});

ClienteSchema.statics.encryptPassword = async(password) => {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

ClienteSchema.statics.comparePassword = async (password, receivedPassword) => {

    return await bcrypt.compare(password, receivedPassword);

};

export default model('Cliente', ClienteSchema);
