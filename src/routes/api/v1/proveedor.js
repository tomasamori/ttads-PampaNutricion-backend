// tested
import express from "express";
import Proveedor from "../../../models/Proveedor";

const router = express.Router();

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/proveedor/
// getAll
router.get('/', async (req,res) => {
    let  proveedores = await Proveedor.find();
    return res.status(200).json({
        success: true,
        data: proveedores,
        message: "Lista de Proveedores recuperada exitosamente"
    })
});

// curl -UseBasicParsing -Method GET -URI http://localhost:3000/api/v1/proveedor/<id>
// getOne

router.get('/:id', async(req,res)=>{
    let pro = await Proveedor.findOne({"idProveedor":req.params.id})
    return res.status(200).json({
        success:true,
        data: pro,
        message: "Proveedor encontrado exitosamente"
    })
});

// curl -UseBasicParsing -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"idProveedor":"test", "cuil":"test", "cuit":"test", "razonSocial":"test", "email":"test", "telefono":"test"}' -URI http://localhost:3000/api/v1/proveedor/
// newProveedor

router.post('/', async (req, res)=>{
    let pro = await new Proveedor(req.body);
    await pro.save();
    return res.status(201).json({
        success: true,
        data: pro,
        message: "Proveedor agregado exitosamente"
    })
});

// curl -UseBasicParsing -Method PUT -Headers @{"Content-Type"= "application/json"} -Body '{"idProveedor":"cambio", "cuil":"cambio", "cuit":"cambio", "razonSocial":"cambio", "email":"cambio", "telefono":"cambio"}' -URI http://localhost:3000/api/v1/proveedor/<id>
// updateProveedor

router.put('/:id', async(req, res) => {
    let pro = await Proveedor.findOne({"idProveedor": req.params.id});
    await pro.update(req.body);
    return res.status(200).json({
        success: true,
        data: {"idProveedor": req.params.id},
        message: "Proveedor actualizado exitosamente"
    })
});

// curl -UseBasicParsing -Method DELETE -URI http://localhost:3000/api/v1/proveedor/<id>
// deleteProveedor

router.delete('/:id', async(req,res)=>{
    await Proveedor.deleteOne({"idProveedor":req.params.id});
    return res.status(200).json({
        success: true,
        data: {"idProveedor": req.params.id},
        message: "Proveedor eliminado exitosamente"
    })
});

export default router;