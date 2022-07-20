import express from 'express';

import cliente from './cliente.routes';
import empleado from './empleado.routes';
import localidad from './localidad.routes';
import producto from './producto.routes';
import proveedor from './proveedor.routes';
import sucursal from './sucursal.routes';
import tipoMascota from './tipoMascota.routes';
import auth from './auth.routes';
import usuario from './usuario.routes';
import precio from './precios.routes';

const router = express.Router();

router.use('/cliente', cliente);
router.use('/empleado', empleado);
router.use('/localidad', localidad);
router.use('/producto', producto);
router.use('/proveedor', proveedor);
router.use('/sucursal', sucursal);
router.use('/tipoMascota', tipoMascota);
router.use('/auth', auth);
router.use('/usuario', usuario);
router.use('/precio', precio);

export default router;