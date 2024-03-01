import Producto from '../models/Producto';
import Precio from '../models/Precio';

// se crean el producto y el precio conjuntamente
export const createProduct = async (req, res) => {

    try {
        const { marca, nombre, descripcion, peso, imgUrl, tipoMascota, precio, promo } = req.body;
        const newProducto = new Producto({ marca, nombre, descripcion, peso, imgUrl, tipoMascota, precio, promo });
        const productSaved = await newProducto.save();
        const producto = productSaved._id;
        const fechaDesde = Date.now();
        const valor = precio;
        const newPrecio = new Precio({ producto, fechaDesde, valor });
        const precioSaved = await newPrecio.save();
        res.status(201).json(productSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getProducts = async (req, res) => {

    try {
        const productos = await Producto.find().populate('tipoMascota').populate('precio');
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getProductById = async (req, res) => {

    try {
        const producto = await Producto.findById(req.params.id).populate('tipoMascota');
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

// ante un cambio de precio en el producto, se crea un nuevo precio
export const updateProductById = async (req, res) => {

    try {
        const producto = await Producto.findById(req.params.id);
        const { marca, nombre, descripcion, peso, imgUrl, tipoMascota, precio, promo } = req.body;
        if (producto.precio !== precio) {
            const productId = req.params.id;
            const fechaDesde = Date.now();
            const valor = precio;
            const newPrecio = new Precio({ producto: productId, fechaDesde, valor });
            const precioSaved = await newPrecio.save();
        }
        const updatedProducto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(204).json(updatedProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const deleteProductById = async (req, res) => {

    try {
        const { id } = req.params;
        await Producto.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};