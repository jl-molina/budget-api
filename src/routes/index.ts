import { Router } from "express";
import userRouter from "./user.route";
import loginRouter from "./login.route";

const router = Router();

function routerApi(app: { use: (arg0: string, arg1: Router) => void; }) {
    app.use('/api/v1', router);
    router.use('/users', userRouter);
    router.use('/login', loginRouter);
} 

export default routerApi;