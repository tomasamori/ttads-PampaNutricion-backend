import { Router } from 'express';
const router = Router();

import * as localidadCtrl from '../../../controllers/localidad.controller';
import {authJwt} from "../../../middlewares";

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], localidadCtrl.getLocalidades);

router.get('/:id', [authJwt.verifyToken, authJwt.isAdmin], localidadCtrl.getLocalidadById);

router.get('/sucursales/:id', [authJwt.verifyToken, authJwt.isAdmin], localidadCtrl.findSucursalByLocalidad);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], localidadCtrl.createLocalidad);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], localidadCtrl.updateLocalidadById);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], localidadCtrl.deleteLocalidadById);

export default router;