import express from "express";
import Producto from "../../../models/Producto";
import TipoMascota from "../../../models/TipoMascota";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/producto/
// getAll

router.get('/', async(req, res) => {
    let productos = await Producto.find().populate('tipoMascota');
    return res.status(200).json({
        success: true,
        data: productos,
        message: "Lista de Productos recuperada exitosamente"
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/producto/<id>
// getOne

router.get('/:id', async(req,res) => {
    let pro = await Producto.findOne({"idProducto":req.params.id}).populate('tipoMascota');
    return res.status(200).json({
        success:true,
        data: pro,
        message: "Producto encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"idProducto":"test", "marca":"test", "nombre":"test", "descripcion":"test", "peso":"10", "tipoMascota":"62cf222803cc229daf562eed"}' -URI http://localhost:3000/api/v1/producto/
// newProducto

router.post('/', async(req, res)=>{
    let pro = await new Producto(req.body);
    await pro.save();
    return res.status(201).json({
        success: true,
        data: pro,
        message: "Producto agregado exitosamente"
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"idProducto":"cambio", "marca":"cambio", "nombre":"cambio", "descripcion":"cambio", "peso":"20"}' -URI http://localhost:3000/api/v1/producto/<id>
// updateProducto

router.put('/:id', async(req, res) => {
    let pro = await Producto.findOne({"idProducto": req.params.id});
    await pro.update(req.body);
    return res.status(200).json({
        success: true,
        data: {"idProducto": req.params.id},
        message: "Producto actualizado exitosamente"
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/producto/<id>
// deleteProducto

router.delete('/:id', async(req, res)=> {
    await Producto.deleteOne({"idProducto":req.params.id});
    return res.status(200).json({
        success: true,
        data: {"idProducto": req.params.id},
        message: "Producto eliminado exitosamente"
    })
});

export default router;