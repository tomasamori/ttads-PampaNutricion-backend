import { Router } from 'express';
const router = Router();

import * as proveedorCtrl from '../../../controllers/proveedor.controller';

router.get('/', proveedorCtrl.getProveedores);

router.get('/:id', proveedorCtrl.getProveedorById);

router.post('/', proveedorCtrl.createProveedor);

router.put('/:id', proveedorCtrl.updateProveedorById);

router.delete('/:id', proveedorCtrl.deleteProveedorById);

export default router;