import express from "express";
import Cliente from "../../../models/Cliente"
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/cliente
// getAll
router.get('/', async (req,res)=>{
    let clientes = await Cliente.find();
    return res.status(200).json({
        success: true,
            data: clientes,
            messaga: 'Lista de Clientes recuperada exitosamente'
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/cliente/<id>
// getOne

router.get('/:id', async(req,res)=>{
    let cliente =await Cliente.findOne({"_id":req.params.id})
    return res.status(200).json({
        success:true,
        data: cliente,
        message: "Cliente encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"marca":"test", "nombre":"test", "descripcion":"test", "peso":"test"}' -URI http://localhost:3000/api/v1/cliente
// newCliente

router.post('/', async(req,res)=>{
    let cliente = await new Client(req.body);
    await  cliente.save();
    return res.status(201).json({
        success: true,
        data: cliente,
        message: 'Cliente agregado exitosamente'
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"marca":"cambio", "nombre":"cambio", "descripcion":"cambio", "peso":"cambio"}' -URI http://localhost:3000/api/v1/cliente/<id>
// updateCliente

router.get('/:id',async (req,res)=>{
    let cliente = await Cliente.findOne({"_id":req.params.id});
    await cliente.update(req.body);
    return res.status(200).json({
        success:true,
        data:{"_id":req.params.id},
        message: 'Cliente Actualizado Exitosamente'
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/producto/<id>
// deleteProducto

router.get('/:id',async (req,res)=>{
let cliente = await Cliente.findOne({"_id":req.params.id});
await cliente.update(req.body);
return res.status(200).json({
    success:true,
    data:{"_id":req.params.id},
    message: 'Cliente Eliminado Correctamente'
})
});

export default router;