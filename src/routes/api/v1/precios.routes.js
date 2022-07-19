import { Router } from 'express';
const router = Router();

import * as precioCtrl from '../../../controllers/precio.controller';

router.get('/', precioCtrl.getPrecios);

router.get('/:id', precioCtrl.getPrecioById);

router.post('/', precioCtrl.createPrecio);

router.put('/:id', precioCtrl.updatePrecioById);

router.delete('/:id', precioCtrl.deletePrecioById);

export default router;