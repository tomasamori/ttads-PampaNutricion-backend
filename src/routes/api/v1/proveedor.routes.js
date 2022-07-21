import { Router } from 'express';
const router = Router();

import * as proveedorCtrl from '../../../controllers/proveedor.controller';

router.get('/', proveedorCtrl.getProveedores);

router.get('/:id', proveedorCtrl.getProveedorById);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, proveedorCtrl.createProveedor);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, proveedorCtrl.updateProveedorById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, proveedorCtrl.deleteProveedorById);

export default router;