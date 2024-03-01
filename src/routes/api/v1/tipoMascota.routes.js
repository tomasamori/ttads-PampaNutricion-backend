import { Router } from 'express';
const router = Router();

import * as tipoMascotaCtrl from '../../../controllers/tipoMascota.controller';

router.get('/', tipoMascotaCtrl.getTipoMascotas);

router.get('/:id', tipoMascotaCtrl.getTipoMascotaById);

router.get('/:id/productos', tipoMascotaCtrl.findProductoByTipoMascota);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, tipoMascotaCtrl.createTipoMascota);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, tipoMascotaCtrl.updateTipoMascotaById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, tipoMascotaCtrl.deleteTipoMascotaById);

export default router;