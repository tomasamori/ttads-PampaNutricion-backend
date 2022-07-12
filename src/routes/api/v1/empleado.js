import express from "express";
import Empleado from "../../../models/Empleado"
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/empleado
// getAll
router.get('/', async (req,res)=>{
    let empleados = await Empleado.find();
    return res.status(200).json({
        success: true,
        data: empleados,
        messaga: 'Lista de Empleados recuperada exitosamente'
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/empleado/<id>
// getOne

router.get('/:id', async(req,res)=>{
    let empleado =await Empleado.findOne({"_id":req.params.id})
    return res.status(200).json({
        success:true,
        data: empleado,
        message: "Empleado encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"marca":"test", "nombre":"test", "descripcion":"test", "peso":"test"}' -URI http://localhost:3000/api/v1/empleado
// newEmpleado

router.post('/', async(req,res)=>{
    let empleado = await new Empleado(req.body);
    await  empleado.save();
    return res.status(201).json({
        success: true,
        data: empleado,
        message: 'Empleado agregado exitosamente'
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"marca":"cambio", "nombre":"cambio", "descripcion":"cambio", "peso":"cambio"}' -URI http://localhost:3000/api/v1/empleado/<id>
// updateEmpleado

router.get('/:id',async (req,res)=>{
    let empleado = await Empleado.findOne({"_id":req.params.id});
    await empleado.update(req.body);
    return res.status(200).json({
        success:true,
        data:{"_id":req.params.id},
        message: 'Empleado Actualizado Exitosamente'
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/empleado/<id>
// deleteEmpleado

router.get('/:id',async (req,res)=>{
    let empleado = await Empleado.findOne({"_id":req.params.id});
    await empleado.update(req.body);
    return res.status(200).json({
        success:true,
        data:{"_id":req.params.id},
        message: 'Empleado Eliminado Correctamente'
    })
});

export default router;