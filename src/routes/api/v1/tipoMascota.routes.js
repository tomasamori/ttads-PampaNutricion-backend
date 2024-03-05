import { Router } from 'express';
const router = Router();

import * as tipoMascotaCtrl from '../../../controllers/tipoMascota.controller';
import {authJwt} from "../../../middlewares";

router.get('/', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], tipoMascotaCtrl.getTipoMascotas);

router.get('/:id', [authJwt.verifyToken, authJwt.isEmpleadoOrAdmin], tipoMascotaCtrl.getTipoMascotaById);

router.get('/productos/:id', [authJwt.verifyToken, authJwt.isAdmin], tipoMascotaCtrl.findProductoByTipoMascota);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], tipoMascotaCtrl.createTipoMascota);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], tipoMascotaCtrl.updateTipoMascotaById);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], tipoMascotaCtrl.deleteTipoMascotaById);

export default router;