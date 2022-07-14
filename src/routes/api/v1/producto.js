import express from "express";
import Producto from "../../../models/Producto";

const router = express.Router();

// getAll

router.get('/', async(req, res) => {
    let productos = await Producto.find().populate('tipoMascota');
    return res.status(200).json(productos);
});

// getOne

router.get('/:id', async(req,res) => {
    let pro = await Producto.findOne({"idProducto":req.params.id}).populate('tipoMascota');
    return res.status(200).json(pro);
});

// newProducto

router.post('/', async(req, res)=>{
    let pro = await new Producto(req.body);
    await pro.save();
    return res.status(201).json("Producto agregado exitosamente");
});

// updateProducto

router.put('/:id', async(req, res) => {
    let pro = await Producto.findOne({"idProducto": req.params.id});
    await pro.update(req.body);
    return res.status(200).json("Producto actualizado exitosamente");
});

// deleteProducto

router.delete('/:id', async(req, res)=> {
    await Producto.deleteOne({"idProducto":req.params.id});
    return res.status(200).json("Producto eliminado exitosamente");
});

export default router;