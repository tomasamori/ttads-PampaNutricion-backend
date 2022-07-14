//tested
import express from "express";
import TipoMascota from "../../../models/TipoMascota";

const router = express.Router();

// getAll

router.get('/', async(req, res) => {
    let tipoMascotas = await TipoMascota.find();
    return res.status(200).json(tipoMascotas)
});

// getOne

router.get('/:id', async(req,res) => {
    let tm = await TipoMascota.findOne({"idTipoMascota":req.params.id})
    return res.status(200).json(tm);
});

// newTipoMascota

router.post('/', async(req, res)=>{
    let tm = await new TipoMascota(req.body);
    await tm.save();
    return res.status(201).json("Tipo de mascota creado exitosamente");
});

// updateTipoMascota

router.put('/:id', async(req, res) => {
    let tm = await TipoMascota.findOne({"idTipoMascota": req.params.id});
    await tm.update(req.body);
    return res.status(200).json("Tipo de mascota actualizado exitosamente");
});

// deleteTipoMascota

router.delete('/:id', async(req, res)=> {
    await TipoMascota.deleteOne({"idTipoMascota":req.params.id});
    return res.status(200).json("Tipo de mascota eliminado exitosamente");
});

export default router;