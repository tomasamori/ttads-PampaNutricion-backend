import {Schema, model} from 'mongoose';

const EmpleadoSchema = new Schema( {
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'},
    cuil: String,
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    fechaNacimiento: Date,
    direccion: String,
    telefono: String,
    legajo: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false,
    collection: 'empleados'
});

export default model('Empleado', EmpleadoSchema);