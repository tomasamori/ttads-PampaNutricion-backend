import { Router } from 'express';
const router = Router();

import * as orderCtrl from '../../../controllers/pedido.controller';
import {authJwt} from "../../../middlewares";

router.get('/', orderCtrl.getOrders);

router.get('/:id', orderCtrl.getOrderById);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, orderCtrl.createOrder);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, orderCtrl.updateOrderById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, orderCtrl.deleteOrderById);

export default router;
