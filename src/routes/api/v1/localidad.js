// tested
import express from "express";
import Localidad from "../../../models/Localidad";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/localidad/
// getAll

router.get('/', async(req, res) => {
    let localidades = await Localidad.find();
    return res.status(200).json({
        success: true,
        data: localidades,
        message: "Lista de Localidades recuperada exitosamente"
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/localidad/<id>
// getOne

router.get('/:id', async(req, res) => {
    let loc = await Localidad.findOne({"idLocalidad": req.params.id});
    return res.status(200).json({
        success:true,
        data: loc,
        message: "Localidad encontrada exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"= "application/json"} -Body '{"idLocalidad": "test","codPostal": "test", "nombre": "test"}' -URI http://localhost:3000/api/v1/localidad/
// newLocalidad

router.post('/', async(req, res) => {
    let loc = await new Localidad(req.body);
    await loc.save();
    return res.status(201).json({
        success: true,
        data: loc,
        message: "Localidad agregada exitosamente"
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"idLocalidad": "cambio","codPostal": "cambio", "nombre": "cambio"}' -URI http://localhost:3000/api/v1/localidad/<id>
// updateLocalidad

router.put('/:id', async(req, res) => {
    let loc = await Localidad.findOne({"idLocalidad": req.params.id});
    await loc.update(req.body);
    return res.status(200).json({
        success: true,
        data: {"idLocalidad": req.params.id},
        message: "Localidad actualizada exitosamente"
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/localidad/<id>
// deleteLocalidad

router.delete('/:id', async(req, res) => {
    await Localidad.deleteOne({"idLocalidad": req.params.id});
    return res.status(200).json({
        success: true,
        data: {"idLocalidad": req.params.id},
        message: "Localidad eliminada exitosamente"
    })
});

export default router;