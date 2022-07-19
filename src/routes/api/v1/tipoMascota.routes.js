import { Router } from 'express';
const router = Router();

import * as tipoMascotaCtrl from '../../../controllers/tipoMascota.controller';

router.get('/', tipoMascotaCtrl.getTipoMascotas);

router.get('/:id', tipoMascotaCtrl.getTipoMascotaById);

router.post('/', tipoMascotaCtrl.createTipoMascota);

router.put('/:id', tipoMascotaCtrl.updateTipoMascotaById);

router.delete('/:id', tipoMascotaCtrl.deleteTipoMascotaById);

export default router;