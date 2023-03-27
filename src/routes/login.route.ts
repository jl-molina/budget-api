import { Router } from "express";
import * as loginController from "../controllers/login.controller";

const router = Router();

router.post('/loginEmail', loginController.loginEmail);

router.post('/loginUsername', loginController.loginUsername);

export default router;