// tested
import express from "express";
import Proveedor from "../../../models/Proveedor";

const router = express.Router();

// getAll

router.get('/', async (req,res) => {
    let  proveedores = await Proveedor.find();
    return res.status(200).json(proveedores);
});

// getOne

router.get('/:id', async(req,res)=>{
    let pro = await Proveedor.findOne({"idProveedor":req.params.id})
    return res.status(200).json(pro);
});

// newProveedor

router.post('/', async (req, res)=>{
    let pro = await new Proveedor(req.body);
    await pro.save();
    return res.status(201).json("Proveedor agregado exitosamente");
});

// updateProveedor

router.put('/:id', async(req, res) => {
    let pro = await Proveedor.findOne({"idProveedor": req.params.id});
    await pro.update(req.body);
    return res.status(200).json("Proveedor actualizado exitosamente");
});

// deleteProveedor

router.delete('/:id', async(req,res)=>{
    await Proveedor.deleteOne({"idProveedor":req.params.id});
    return res.status(200).json("Proveedor eliminado exitosamente");
});

export default router;