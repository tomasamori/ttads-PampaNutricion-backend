import { Router } from 'express';
const router = Router();

import * as sucursalCtrl from '../../../controllers/sucursal.controller';

router.get('/', sucursalCtrl.getSucursales);

router.get('/:id', sucursalCtrl.getSucursalById);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, sucursalCtrl.createSucursal);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, sucursalCtrl.updateSucursalById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, sucursalCtrl.deleteSucursalById);

export default router;