import express from "express";
import Sucursal from "../../../models/Sucursal";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/sucursal/
// getAll

router.get('/', async(req, res) => {
    let sucursales = await Sucursal.find();
    return res.status(200).json({
        success: true,
        data: sucursales,
        message: "Lista de sucursales recuperada exitosamente"
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/sucursal/<id>
// getOne

router.get('/:id', async(req, res) => {
    let suc = await Sucursal.findOne({"_id": req.params.id});
    return res.status(200).json({
        success:true,
        data: suc,
        message: "Sucursal encontrada exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"= "application/json"} -Body '{"nombre": "test", "direccion": "test"}' -URI http://localhost:3000/api/v1/sucursal
// newSucursal

router.post('/', async(req, res) => {
    let suc = await new Sucursal(req.body);
    await suc.save();
    return res.status(201).json({
        success: true,
        data: suc,
        message: 'Sucursal agregada exitosamente'
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"nombre": "cambio", "direccion": "cambio"}' -URI http://localhost:3000/api/v1/sucursal/<id>
// updateSucursal

router.put('/:id', async(req, res) => {
    let suc = await Sucursal.findOne({"_id": req.params.id});
    await suc.update(req.body);
    return res.status(200).json({
        success: true,
        data: {"_id": req.params.id},
        message: 'Sucursal actualizada exitosamente'
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/sucursal/<id>
// deleteSucursal

router.delete('/:id', async(req, res) => {
    await Sucursal.deleteOne({"_id": req.params.id});
    return res.status(200).json({
        success: true,
        data: {"_id": req.params.id},
        message: 'Sucursal eliminada exitosamente'
    })
});

export default router;