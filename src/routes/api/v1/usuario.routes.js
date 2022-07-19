import {Router} from 'express';
const router = Router();

import * as usuarioCtrl from '../../../controllers/usuario.controller';
import {authJwt, verifySignUp} from "../../../middlewares";

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted], usuarioCtrl.createUser);

export default router;