const mongoose = require('mongoose');

const PrecioSchema = new mongoose.Schema( {
    fechaDesde: Date,
    valor: Number
}, {
    timestamps: true,
    versionKey: false,
    collection: 'precios'
});

module.exports = mongoose.model('Precio', PrecioSchema);