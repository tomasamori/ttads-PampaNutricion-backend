const mongoose = require('mongoose');

const TipoMascotaSchema = new mongoose.Schema( {
    nombre: String,
    tamanoRaza: String,
    edad: String
}, {
    timestamps: true,
    versionKey: false,
    collection: 'tipomascotas'
})

module.exports = mongoose.model('TipoMascota', TipoMascotaSchema);