import express from "express";
import sucursal from "./sucursal";

const router = express.Router();

router.use('/sucursal', sucursal);

export default router;