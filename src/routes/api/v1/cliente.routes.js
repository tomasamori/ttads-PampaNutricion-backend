import { Router } from 'express';
const router = Router();

import * as clienteCtrl from '../../../controllers/cliente.controller';

router.get('/', clienteCtrl.getClientes);

router.get('/:id', clienteCtrl.getClienteById);

router.post('/', clienteCtrl.createCliente);

router.put('/:id', clienteCtrl.updateClienteById);

router.delete('/:id', clienteCtrl.deleteClienteById);

export default router;