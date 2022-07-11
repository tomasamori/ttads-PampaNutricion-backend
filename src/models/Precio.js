const mongoose = require('mongoose');

const PrecioSchema = new mongoose.Schema( {
    fechaDesde:Date,
    valor:Number
});

module.exports = mongoose.model('Precio', PrecioSchema);