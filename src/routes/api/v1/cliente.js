import express from "express";
import Cliente from "../../../models/Cliente";

const router = express.Router();

// getAll

router.get('/', async (req,res)=>{
    let clientes = await Cliente.find();
    return res.status(200).json(clientes);
});

// getOne

router.get('/:id', async(req,res)=>{
    let cli = await Cliente.findOne({"idUsuario":req.params.id});
    return res.status(200).json(cli);
});

// getOneByUser

router.get('/user/:user', async(req,res)=>{
    let cli = await Cliente.findOne({"usuario":req.params.user});
    return res.status(200).json(cli);
});

// newCliente

router.post('/', async(req,res) => {
    let cli = await new Cliente(req.body);
    await cli.save();
    return res.status(201).json("Cliente agregado exitosamente");
});

// updateCliente

router.put('/:id',async (req,res)=>{
    let cli = await Cliente.findOne({"idUsuario":req.params.id});
    await cli.update(req.body);
    return res.status(200).json("Cliente actualizado exitosamente");
});

// deleteCliente

router.delete('/:id', async(req, res) => {
    await Cliente.deleteOne({"idUsuario": req.params.id});
    return res.status(200).json("Cliente eliminado exitosamente");
});

export default router;