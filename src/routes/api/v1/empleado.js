// tested
import express from "express";
import Empleado from "../../../models/Empleado"

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/empleado/
// getAll

router.get('/', async (req,res)=>{
    let emp = await Empleado.find();
    return res.status(200).json({
        success: true,
        data: emp,
        message: "Lista de Empleados recuperada exitosamente"
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/empleado/<id>
// getOne

router.get('/:id', async(req,res)=>{
    let emp =await Empleado.findOne({"idUsuario":req.params.id})
    return res.status(200).json({
        success:true,
        data: emp,
        message: "Empleado encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"idUsuario":"test", "usuario":"test", "password":"test", "cuil":"test", "email":"test", "fechaNacimiento": "2000,01,01", "direccion":"test", "telefono":"test", "legajo":"test", "nombre":"test", "apellido":"test"}' -URI http://localhost:3000/api/v1/empleado/
// newEmpleado

router.post('/', async(req,res)=>{
    let emp = await new Empleado(req.body);
    await  emp.save();
    return res.status(201).json({
        success: true,
        data: emp,
        message: "Empleado agregado exitosamente"
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"idUsuario":"cambio", "usuario":"cambio", "password":"cambio", "cuil":"cambio", "email":"cambio", "fechaNacimiento": "2001,05,26", "direccion":"cambio", "telefono":"cambio", "legajo":"cambio", "nombre":"cambio", "apellido":"cambio"}' -URI http://localhost:3000/api/v1/empleado/<id>
// updateEmpleado

router.put('/:id',async (req,res)=>{
    let emp = await Empleado.findOne({"idUsuario":req.params.id});
    await emp.update(req.body);
    return res.status(200).json({
        success:true,
        data:{"idUsuario":req.params.id},
        message: "Empleado actualizado exitosamente"
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/empleado/<id>
// deleteEmpleado

router.delete('/:id',async (req,res)=>{
    await Empleado.deleteOne({"idUsuario":req.params.id});
    return res.status(200).json({
        success:true,
        data:{"idUsuario":req.params.id},
        message: "Empleado eliminado exitosamente"
    })
});

export default router;