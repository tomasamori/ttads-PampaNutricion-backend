// tested
import express from "express";
import Localidad from "../../../models/Localidad";

const router = express.Router();

// getAll

router.get('/', async(req, res) => {
    let localidades = await Localidad.find();
    return res.status(200).json(localidades);
});

// getOne

router.get('/:id', async(req, res) => {
    let loc = await Localidad.findOne({"idLocalidad": req.params.id});
    return res.status(200).json(loc);
});

// newLocalidad

router.post('/', async(req, res) => {
    let loc = await new Localidad(req.body);
    await loc.save();
    return res.status(201).json("Localidad agregada exitosamente");
});

// updateLocalidad

router.put('/:id', async(req, res) => {
    let loc = await Localidad.findOne({"idLocalidad": req.params.id});
    await loc.update(req.body);
    return res.status(200).json("Localidad actualizada exitosamente");
});

// deleteLocalidad

router.delete('/:id', async(req, res) => {
    await Localidad.deleteOne({"idLocalidad": req.params.id});
    return res.status(200).json("Localidad eliminada exitosamente");
});

export default router;