import { Router } from 'express';
const router = Router();

import * as localidadCtrl from '../../../controllers/localidad.controller';

router.get('/', localidadCtrl.getLocalidades);

router.get('/:id', localidadCtrl.getLocalidadById);

router.get('/:id/sucursales', localidadCtrl.findSucursalByLocalidad);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, localidadCtrl.createLocalidad);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, localidadCtrl.updateLocalidadById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, localidadCtrl.deleteLocalidadById);

export default router;