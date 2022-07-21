import { Router } from 'express';
const router = Router();

import * as precioCtrl from '../../../controllers/precio.controller';

router.get('/', precioCtrl.getPrecios);

router.get('/:id', precioCtrl.getPrecioById);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, precioCtrl.createPrecio);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, precioCtrl.updatePrecioById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, precioCtrl.deletePrecioById);

export default router;