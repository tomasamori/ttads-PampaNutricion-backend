import express from 'express';

import cliente from './cliente';
import empleado from './empleado';
import localidad from './localidad';
import producto from './producto.routes';
import proveedor from './proveedor';
import sucursal from './sucursal';
import tipoMascota from './tipoMascota';
import auth from './auth.routes';

const router = express.Router();

router.use('/cliente', cliente);
router.use('/empleado', empleado);
router.use('/localidad', localidad);
router.use('/producto', producto);
router.use('/proveedor', proveedor);
router.use('/sucursal', sucursal);
router.use('/tipoMascota', tipoMascota);
router.use('/auth', auth);

export default router;