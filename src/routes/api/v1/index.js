import express from 'express';

import sucursal from './sucursal';
import localidad from './localidad'
import producto from './producto';
import proveedor from "./proveedor";
import tipoMascota from "./tipoMascota";

const router = express.Router();

router.use('/sucursal', sucursal);
router.use('/localidad', localidad);
router.use('/producto', producto);
router.use('/proveedor',proveedor);
router.use('/tipoMascota', tipoMascota);

export default router;