import { Router } from 'express';
const router = Router();

import * as sucursalCtrl from '../../../controllers/sucursal.controller';

router.get('/', sucursalCtrl.getSucursales);

router.get('/:id', sucursalCtrl.getSucursalById);

router.post('/', sucursalCtrl.createSucursal);

router.put('/:id', sucursalCtrl.updateSucursalById);

router.delete('/:id', sucursalCtrl.deleteSucursalById);

export default router;