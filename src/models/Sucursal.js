import {Schema, model} from "mongoose";

const sucursalSchema = new Schema({
    nombre: String,
    direccion: String
});

export default model("Sucursal", sucursalSchema);