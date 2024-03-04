import { Router } from 'express';
const router = Router();

import * as rolCtrl from '../../../controllers/rol.controller';

router.get('/', rolCtrl.getRoles);


export default router;