import { Router } from 'express';
const router = Router();

import * as empleadoCtrl from '../../../controllers/empleado.controller';

router.get('/', empleadoCtrl.getEmpleados);

router.get('/:id', empleadoCtrl.getEmpleadoById);

router.post('/'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, empleadoCtrl.createEmpleado);

router.put('/:id'/*, [authJwt.verifyToken, authJwt.isEmpleado]*/, empleadoCtrl.updateEmpleadoById);

router.delete('/:id'/*, [authJwt.verifyToken, authJwt.isAdmin]*/, empleadoCtrl.deleteEmpleadoById);

export default router;