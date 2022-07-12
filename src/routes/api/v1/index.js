import express from 'express';
import producto from './producto';

const router = express.Router();

router.use('/producto', producto);

router.use('/sucursal', sucursal);

export default router;