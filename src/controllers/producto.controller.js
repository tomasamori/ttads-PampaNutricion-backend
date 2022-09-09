import Producto from '../models/Producto';

export const createProduct = async (req, res) => {

    const {marca, nombre, descripcion, peso, imgUrl, tipoMascota, precio, categoria, promo} = req.body;
    const newProducto = new Producto({marca, nombre, descripcion, peso, imgUrl, tipoMascota, precio, categoria, promo});
    const productSaved = await newProducto.save();
    res.status(201).json(productSaved);

};

export const getProducts = async (req, res) => {

    const productos = await Producto.find().populate('tipoMascota').populate('precio');
    res.status(200).json(productos);

};

export const getProductById = async (req, res) => {

    const producto = await Producto.findById(req.params.id).populate('tipoMascota').populate('precio');
    res.status(200).json(producto);

};

export const updateProductById = async (req, res) => {

    const updatedProducto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(204).json(updatedProducto);

};

export const deleteProductById = async (req, res) => {

    const {id}=req.params;
    await Producto.findByIdAndDelete(id);
    res.status(204).json();

};