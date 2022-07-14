//tested
import express from "express";
import Sucursal from "../../../models/Sucursal";

const router = express.Router();

// getAll

router.get('/', async(req, res) => {
    let sucursales = await Sucursal.find().populate('localidad');
    return res.status(200).json(sucursales);
});

// getOne

router.get('/:id', async(req, res) => {
    let suc = await Sucursal.findOne({"idSucursal": req.params.id}).populate('localidad');
    return res.status(200).json(suc);
});

// newSucursal

router.post('/', async(req, res) => {
    let suc = await new Sucursal(req.body);
    await suc.save();
    return res.status(201).json("Sucursal creada exitosamente");
});

// updateSucursal

router.put('/:id', async(req, res) => {
    let suc = await Sucursal.findOne({"idSucursal": req.params.id});
    await suc.update(req.body);
    return res.status(200).json("Sucursal actualizada exitosamente");
});

// deleteSucursal

router.delete('/:id', async(req, res) => {
    await Sucursal.deleteOne({"idSucursal": req.params.id});
    return res.status(200).json("Sucursal eliminada exitosamente");
});

export default router;