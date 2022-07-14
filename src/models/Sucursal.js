import {Schema, model} from "mongoose";

const sucursalSchema = new Schema({
    idSucursal: String,
    nombre: String,
    direccion: String,
    localidad: {type: Schema.Types.ObjectId, ref: 'Localidad'}
});

export default model("Sucursal", sucursalSchema);