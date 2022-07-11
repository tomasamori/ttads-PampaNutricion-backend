const mongoose = require('mongoose');

const LocalidadSchema = new mongoose.Schema({
    idLocalidad: String,
    codPostal: String,
    nombre: String
});

module.exports = mongoose.model('Localidad', LocalidadSchema);