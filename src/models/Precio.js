const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const PrecioSchema = new mongoose.Schema( {
    producto: {type: Schema.Types.ObjectId, ref: 'Producto'},
    fechaDesde: Date,
    valor: Number
}, {
    timestamps: true,
    versionKey: false,
    collection: 'precios'
});

module.exports = mongoose.model('Precio', PrecioSchema);