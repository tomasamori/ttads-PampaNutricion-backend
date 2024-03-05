import { Router } from 'express';
const router = Router();

import * as precioCtrl from '../../../controllers/precio.controller';
import {authJwt} from "../../../middlewares";

router.get('/', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], precioCtrl.getPrecios);

router.get('/:id', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], precioCtrl.getPrecioById);

router.post('/', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], precioCtrl.createPrecio);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], precioCtrl.updatePrecioById);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], precioCtrl.deletePrecioById);

export default router;