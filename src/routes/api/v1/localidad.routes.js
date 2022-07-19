import { Router } from 'express';
const router = Router();

import * as localidadCtrl from '../../../controllers/localidad.controller';

router.get('/', localidadCtrl.getLocalidades);

router.get('/:id', localidadCtrl.getLocalidadById);

router.post('/', localidadCtrl.createLocalidad);

router.put('/:id', localidadCtrl.updateLocalidadById);

router.delete('/:id', localidadCtrl.deleteLocalidadById);

export default router;