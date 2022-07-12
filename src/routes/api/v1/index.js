import express from 'express';
import sucursal from './sucursal';
import producto from './producto';
import proveedor from "./proveedor";
import tipoMascota from "./tipoMascota";

const router = express.Router();

router.use('/producto', producto);
router.use('/proveedor',proveedor);
router.use('/sucursal', sucursal);
router.use('/tipoMascota', tipoMascota);

export default router;