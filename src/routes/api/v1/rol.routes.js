import { Router } from 'express';
const router = Router();

import * as rolCtrl from '../../../controllers/rol.controller';
import {authJwt} from "../../../middlewares";

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], rolCtrl.getRoles);


export default router;