import { Router } from 'express';
const router = Router();

import * as productCtrl from '../../../controllers/producto.controller';

router.get('/', productCtrl.getProducts);

router.get('/:id', productCtrl.getProductById);

router.post('/', productCtrl.createProduct);

router.put('/:id', productCtrl.updateProductById);

router.delete('/:id', productCtrl.deleteProductById);


export default router;
