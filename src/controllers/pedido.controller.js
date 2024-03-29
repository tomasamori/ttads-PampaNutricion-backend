import Pedido from '../models/Pedido';

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { usuario, items, subtotal, total, estado } = req.body;
    const newOrder = new Pedido({ usuario, items, subtotal, total, estado });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Pedido.find().populate({
      path: 'usuario',
      populate: { path: 'rol', select: '_id name' }
    })
      .populate({
        path: 'items',
        populate: { path: 'producto', select: '_id marca nombre descripcion peso imgUrl tipoMascota precio promo' }
      });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Pedido.findById(req.params.id).populate({
      path: 'usuario',
      populate: { path: 'rol', select: '_id name' }
    })
    .populate({
      path: 'items',
      populate: { path: 'producto', select: '_id marca nombre descripcion peso imgUrl tipoMascota precio promo' }
    });
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an order by ID
export const updateOrderById = async (req, res) => {
  try {
    const { usuario, items, subtotal, total, estado } = req.body;
    const updatedOrder = await Pedido.findByIdAndUpdate(req.params.id, { usuario, items, subtotal, total, estado }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an order by ID
export const deleteOrderById = async (req, res) => {
  try {
    const deletedOrder = await Pedido.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get orders by user ID
export const getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Pedido.find({ usuario: req.params.id }).populate({
      path: 'usuario',
      populate: { path: 'rol', select: '_id name' }
    })
      .populate({
        path: 'items',
        populate: { path: 'producto', select: '_id marca nombre descripcion peso imgUrl tipoMascota precio promo' }
      });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
