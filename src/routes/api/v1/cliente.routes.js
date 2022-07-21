import { Router } from 'express';
const router = Router();

import * as clienteCtrl from '../../../controllers/cliente.controller';
import {authJwt} from "../../../middlewares";

router.get('/', clienteCtrl.getClientes);

router.get('/:id', clienteCtrl.getClienteById);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, clienteCtrl.createCliente);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, clienteCtrl.updateClienteById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, clienteCtrl.deleteClienteById);

export default router;