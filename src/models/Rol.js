import { Schema, model } from 'mongoose';

export const ROLES = ["cliente", "empleado", "admin"]

const RolSchema = new Schema({
    name: String
}, {
    versionKey: false,
    collection: "roles"
})

export default model("Rol", RolSchema)