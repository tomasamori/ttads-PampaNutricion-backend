import { Router } from 'express';
const router = Router();

import * as productCtrl from '../../../controllers/producto.controller';
import {authJwt} from "../../../middlewares";

router.get('/', productCtrl.getProducts);

router.get('/:id', productCtrl.getProductById);

router.post('/', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], productCtrl.createProduct);

router.put('/:id', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], productCtrl.updateProductById);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.deleteProductById);

export default router;
