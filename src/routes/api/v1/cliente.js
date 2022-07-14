import express from "express";
import Cliente from "../../../models/Cliente";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/cliente/
// getAll

router.get('/', async (req,res)=>{
    let clientes = await Cliente.find();
    return res.status(200).json({
        success: true,
            data: clientes,
            messaga: "Lista de Clientes recuperada exitosamente"
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/cliente/<id>
// getOne

router.get('/:id', async(req,res)=>{
    let cliente = await Cliente.findOne({"idUsuario":req.params.id})
    return res.status(200).json({
        success:true,
        data: cliente,
        message: "Cliente encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"= "application/json"} -Body '{"idUsuario": "test", "usuario": "test", "password": "test", "cuil": "test", "cuit": "test", "email": "test", "fechaNacimiento": "2000,01,01", "direccion": "test", "telefono": "test", "razonSocial": "test"}' -URI http://localhost:3000/api/v1/cliente/
// newCliente

router.post('/', async(req,res) => {
    let cli = await new Cliente(req.body);
    await cli.save();
    return res.status(201).json({
        success: true,
        data: cli,
        message: "Cliente agregado exitosamente"
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"idUsuario": "cambio", "usuario": "cambio", "password": "cambio", "cuil": "cambio", "cuit": "cambio", "email": "cambio", "fechaNacimiento": "2001,05,26", "direccion": "cambio", "telefono": "cambio", "razonSocial": "cambio"}' -URI http://localhost:3000/api/v1/cliente/<id>
// updateCliente

router.put('/:id',async (req,res)=>{
    let cliente = await Cliente.findOne({"idUsuario":req.params.id});
    await cliente.update(req.body);
    return res.status(200).json({
        success:true,
        data:{"idUsuario":req.params.id},
        message: "Cliente actualizado exitosamente"
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/cliente/<id>
// deleteCliente

router.delete('/:id', async(req, res) => {
    await Cliente.deleteOne({"idUsuario": req.params.id});
    return res.status(200).json({
        success: true,
        data: {"idUsuario": req.params.id},
        message: "Cliente eliminado exitosamente"
    })
});

export default router;