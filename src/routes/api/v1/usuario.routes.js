import {Router} from 'express';
const router = Router();

import * as usuarioCtrl from '../../../controllers/usuario.controller';
import {authJwt, verifySignUp} from "../../../middlewares";

router.get('/', usuarioCtrl.getUsuarios);

router.get('/:id', usuarioCtrl.getUsuarioById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUsernameOrEmail], usuarioCtrl.createUsuario);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUsernameOrEmail], usuarioCtrl.updateUsuarioById);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin],  usuarioCtrl.deleteUsuarioById);

export default router;