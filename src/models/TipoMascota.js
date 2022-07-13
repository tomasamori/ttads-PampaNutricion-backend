const mongoose = require('mongoose');

const TipoMascotaSchema = new mongoose.Schema( {
    idTipoMascota: String,
    nombre: String,
    tamanoRaza: String,
    edad: String
})

module.exports = mongoose.model('TipoMascota', TipoMascotaSchema);