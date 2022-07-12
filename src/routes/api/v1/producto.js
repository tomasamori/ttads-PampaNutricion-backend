import express from "express";
import Producto from "../../../models/Producto";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/producto
// get all

router.get('/', async(req, res) => {
    let productos = await Producto.find();
    return res.status(200).json({
        success: true,
        data: productos,
        message: 'Lista de productos recuperada exitosamente'
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/producto/<id>
// getOne

router.get('/:id', async(req,res) => {
    let pro = await Producto.findOne({"_id":req.params.id})
    return res.status(200).json({
        success:true,
        data: pro,
        message: "Producto encontrado exitosamente"
    })
});

//curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"marca":"test", "nombre":"test", "descripcion":"test", "peso":"test"}' -URI http://localhost:3000/api/v1/producto
// newProducto

router.post('/', async(req, res)=>{
    let pro = await new Producto(req.body);
    await pro.save();
    return res.status(200).json({
        success: true,
        data: pro,
        message: 'Producto agregado exitosamente'
    })
});

//curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/producto/<id>

router.delete('/:id', async(req, res)=> {
    await Producto.deleteOne({"_id":req.params.id});
    return res.status(200).json({
        success: true,
        data: {"_id": req.params.id},
        message: 'Producto eliminado exitosamente'
    })
});

export default router;