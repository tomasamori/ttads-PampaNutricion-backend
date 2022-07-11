const mongoose = require('mongoose');

const TipoMascotaSchema = new mongoose.Schema( {
    idTipoMascota: String,
    nombre: String,
    tamanoRaza: String,
    edad: Number
})

module.exports = mongoose.model('TipoMascota', TipoMascotaSchema);