import { Router } from "express";
const router = Router();
import * as controller from '../controller/controller.js'

router.route('/product')
    .post(controller.getLink)
export default router