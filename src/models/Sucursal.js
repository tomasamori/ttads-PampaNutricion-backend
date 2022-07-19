import {Schema, model} from "mongoose";

const sucursalSchema = new Schema({
    nombre: String,
    direccion: String,
    localidad: {type: Schema.Types.ObjectId, ref: 'Localidad'}
}, {
    timestamps: true,
    versionKey: false,
    collection: 'sucursales'
});

export default model("Sucursal", sucursalSchema);