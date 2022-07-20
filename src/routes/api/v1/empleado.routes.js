import { Router } from 'express';
const router = Router();

import * as empleadoCtrl from '../../../controllers/empleado.controller';

router.get('/', empleadoCtrl.getEmpleados);

router.get('/:id', empleadoCtrl.getEmpleadoById);

router.post('/', empleadoCtrl.createEmpleado);

router.put('/:id', empleadoCtrl.updateEmpleadoById);

router.delete('/:id', empleadoCtrl.deleteEmpleadoById);

export default router;