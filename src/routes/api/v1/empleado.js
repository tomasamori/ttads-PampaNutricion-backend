import express from "express";
import Empleado from "../../../models/Empleado"

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/empleado
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
    let emp =await Empleado.findOne({"_id":req.params.id})
    return res.status(200).json({
        success:true,
        data: emp,
        message: "Empleado encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"idUsuario":"test", "usuario":"test", "password":"test", "cuil":"test", "email":"test", "fechaNacimiento": "2000,01,01", "direccion":"test", "telefono":"test", "legajo":"test", "nombre":"test", "apellido":"test"}' -URI http://localhost:3000/api/v1/empleado
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

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"idUsuario":"test", "usuario":"test", "password":"test", "cuil":"test", "email":"test", "fechaNacimiento": "2000,01,01", "direccion":"test", "telefono":"test", "legajo":"test", "nombre":"test", "apellido":"test"}' -URI http://localhost:3000/api/v1/empleado/<id>
// updateEmpleado

router.put('/:id',async (req,res)=>{
    let emp = await Empleado.findOne({"_id":req.params.id});
    await emp.update(req.body);
    return res.status(200).json({
        success:true,
        data:{"_id":req.params.id},
        message: "Empleado actualizado exitosamente"
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/empleado/<id>
// deleteEmpleado

router.delete('/:id',async (req,res)=>{
    await Empleado.deleteOne({"_id":req.params.id});
    return res.status(200).json({
        success:true,
        data:{"_id":req.params.id},
        message: "Empleado eliminado correctamente"
    })
});

export default router;