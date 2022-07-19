const mongoose = require('mongoose');

const LocalidadSchema = new mongoose.Schema({
    codPostal: String,
    nombre: String
}, {
    timestamps: true,
    versionKey: false,
    collection: 'localidades'
});

module.exports = mongoose.model('Localidad', LocalidadSchema);