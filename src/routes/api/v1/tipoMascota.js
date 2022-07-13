import express from "express";
import TipoMascota from "../../../models/Producto";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/tipoMascota
// getAll

router.get('/', async(req, res) => {
    let tipoMascotas = await TipoMascota.find();
    return res.status(200).json({
        success: true,
        data: tipoMascotas,
        message: 'Lista de tipos de mascotas recuperada exitosamente'
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/tipoMascota/<id>
// getOne

router.get('/:id', async(req,res) => {
    let tm = await TipoMascota.findOne({"_id":req.params.id})
    return res.status(200).json({
        success:true,
        data: tm,
        message: "Tipo de Mascota encontrado exitosamente"
    })
});

//curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"nombre":"test", "tamanoraza":"test", "edad":"test"}' -URI http://localhost:3000/api/v1/tipoMascota
// newTipoMascota

router.post('/', async(req, res)=>{
    let tm = await new TipoMascota(req.body);
    await tm.save();
    return res.status(201).json({
        success: true,
        data: tm,
        message: 'Tipo de Mascota agregado exitosamente'
    })
});

//curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/tipoMascota/<id>
//deleteTipoMascota

router.delete('/:id', async(req, res)=> {
    await TipoMascota.deleteOne({"_id":req.params.id});
    return res.status(200).json({
        success: true,
        data: {"_id": req.params.id},
        message: 'Tipo de Mascota eliminado exitosamente'
    })
});


// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"nombre":"test", "tamanoraza":"test", "edad":"test"}' -URI http://localhost:3000/api/v1/tipoMascota/<id>
// updateTipoMascota

router.put('/:id', async(req, res) => {
    let tm = await TipoMascota.findOne({"_id": req.params.id});
    await tm.update(req.body);
    return res.status(200).json({
        success: true,
        data: {"_id": req.params.id},
        message: 'Tipo de Mascota actualizada exitosamente'
    })
});

export default router;