// tested
import express from "express";
import Empleado from "../../../models/Empleado"

const router = express.Router();

// getAll

router.get('/', async (req,res)=>{
    let empleados = await Empleado.find();
    return res.status(200).json(empleados);
});

// getOne

router.get('/:id', async(req,res)=>{
    let emp =await Empleado.findOne({"idUsuario":req.params.id})
    return res.status(200).json(emp);
});

// newEmpleado

router.post('/', async(req,res)=>{
    let emp = await new Empleado(req.body);
    await  emp.save();
    return res.status(201).json("Empleado agregado exitosamente");
});

// updateEmpleado

router.put('/:id',async (req,res)=>{
    let emp = await Empleado.findOne({"idUsuario":req.params.id});
    await emp.update(req.body);
    return res.status(200).json("Empleado actualizado exitosamente");
});

// deleteEmpleado

router.delete('/:id',async (req,res)=>{
    await Empleado.deleteOne({"idUsuario":req.params.id});
    return res.status(200).json("Empleado eliminado exitosamente");
});

export default router;