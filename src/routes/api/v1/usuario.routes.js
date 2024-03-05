import {Router} from 'express';
const router = Router();

import * as usuarioCtrl from '../../../controllers/usuario.controller';
import {authJwt, verifySignUp} from "../../../middlewares";

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], usuarioCtrl.getUsuarios);

router.get('/:id', [authJwt.verifyToken, authJwt.isAdmin], usuarioCtrl.getUsuarioById);

router.get('/pedidos/:id', [authJwt.verifyToken, authJwt.isAdmin], usuarioCtrl.findOrdersByUser);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUsernameOrEmail], usuarioCtrl.createUsuario);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUsernameOrEmail], usuarioCtrl.updateUsuarioById);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], usuarioCtrl.deleteUsuarioById);

export default router;