import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const UsuarioSchema = new Schema({
    usuario: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    roles: [{type: Schema.Types.ObjectId, ref: 'Rol'}]
}, {
    timestamps: true,
    versionKey: false,
    collection: 'usuarios'
});

UsuarioSchema.statics.encryptPassword = async(password) => {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

UsuarioSchema.statics.comparePassword = async (password, receivedPassword) => {

    return await bcrypt.compare(password, receivedPassword);

};

export default model('Usuario', UsuarioSchema);