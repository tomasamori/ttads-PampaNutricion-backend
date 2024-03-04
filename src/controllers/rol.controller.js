import Rol from '../models/Rol';


// Get all orders
export const getRoles = async (req, res) => {
  try {
    const orders = await Rol.find()
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

