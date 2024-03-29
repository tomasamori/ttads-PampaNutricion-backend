import { Router } from 'express';
const router = Router();

import * as orderCtrl from '../../../controllers/pedido.controller';
import {authJwt} from "../../../middlewares";

router.get('/', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], orderCtrl.getOrders);

router.get('/:id', [authJwt.verifyToken, authJwt.isAdmin], orderCtrl.getOrderById);

router.get('/usuario/:id', [authJwt.verifyToken], orderCtrl.getOrdersByUserId);

router.post('/', [authJwt.verifyToken], orderCtrl.createOrder);

router.put('/:id', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], orderCtrl.updateOrderById);

router.delete('/:id', [authJwt.isAdmin], orderCtrl.deleteOrderById);

export default router;
