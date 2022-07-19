import { Schema, model } from 'mongoose';

export const ROLES = ["cliente", "moderador", "admin"]

const RolSchema = new Schema({
    name: String
}, {
    versionKey: false,
    collection: "roles"
})

export default model("Rol", RolSchema)