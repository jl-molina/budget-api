import { Router } from "express";
import * as userController from "../controllers/user.controller";

const router = Router();

router.get('/allUsers', userController.getAllUsers);

router.post('/signup', userController.signUp);

export default router;