import express from 'express';
import producto from './producto';

const router = express.Router();

router.use('/producto', producto);

export default router;