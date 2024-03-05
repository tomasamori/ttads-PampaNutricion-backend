import { Router } from 'express';
const router = Router();

import * as proveedorCtrl from '../../../controllers/proveedor.controller';
import {authJwt} from "../../../middlewares";

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], proveedorCtrl.getProveedores);

router.get('/:id', [authJwt.verifyToken, authJwt.isAdmin], proveedorCtrl.getProveedorById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], proveedorCtrl.createProveedor);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], proveedorCtrl.updateProveedorById);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], proveedorCtrl.deleteProveedorById);

export default router;