// tested
import express from "express";
import TipoMascota from "../../../models/TipoMascota";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/tipoMascota/
// getAll

router.get('/', async(req, res) => {
    let tipoMascotas = await TipoMascota.find();
    return res.status(200).json({
        success: true,
        data: tipoMascotas,
        message: "Lista de Tipos de Mascotas recuperada exitosamente"
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/tipoMascota/<id>
// getOne

router.get('/:id', async(req,res) => {
    let tm = await TipoMascota.findOne({"idTipoMascota":req.params.id})
    return res.status(200).json({
        success:true,
        data: tm,
        message: "Tipo de Mascota encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"idTipoMascota":"1", "nombre":"Perro", "tamanoRaza":"Mediano", "edad":"Adulto"}' -URI http://localhost:3000/api/v1/tipoMascota/
// newTipoMascota

router.post('/', async(req, res)=>{
    let tm = await new TipoMascota(req.body);
    await tm.save();
    return res.status(201).json({
        success: true,
        data: tm,
        message: "Tipo de Mascota agregado exitosamente"
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"idTipoMascota":"cambio", "nombre":"cambio", "tamanoRaza":"cambio", "edad":"cambio"}' -URI http://localhost:3000/api/v1/tipoMascota/<id>
// updateTipoMascota

router.put('/:id', async(req, res) => {
    let tm = await TipoMascota.findOne({"idTipoMascota": req.params.id});
    await tm.update(req.body);
    return res.status(200).json({
        success: true,
        data: {"idTipoMascota": req.params.id},
        message: "Tipo de Mascota actualizada exitosamente"
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/tipoMascota/<id>
// deleteTipoMascota

router.delete('/:id', async(req, res)=> {
    await TipoMascota.deleteOne({"idTipoMascota":req.params.id});
    return res.status(200).json({
        success: true,
        data: {"idTipoMascota": req.params.id},
        message: "Tipo de Mascota eliminado exitosamente"
    })
});

export default router;
