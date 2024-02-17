import { Schema, model } from 'mongoose';

const PedidoSchema = new Schema({
  nroPedido: { type: Number, unique: true },
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  productos: [{ type: Schema.Types.ObjectId, ref: 'Producto' }],
  cantidad: [{ type: Number, default: 1 }],
  subtotal: Number,
  total: Number,
  estado: String,
}, {
  timestamps: true,
  versionKey: false,
});

// Definir un pre-hook para generar el número de pedido autoincremental
PedidoSchema.pre('save', async function (next) {
  if (!this.nroPedido) {
    const ultimoPedido = await this.constructor.findOne({}, {}, { sort: { nroPedido: -1 } });
    this.nroPedido = ultimoPedido ? ultimoPedido.nroPedido + 1 : 1;
  }
  next();
});

// Configurar el índice único para el número de pedido
PedidoSchema.index({ nroPedido: 1 }, { unique: true });

export default model('Pedido', PedidoSchema);
