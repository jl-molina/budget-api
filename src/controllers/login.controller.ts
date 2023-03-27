import { Request, Response} from "express";
import * as loginService from "../services/login.service";

async function loginEmail(req: Request, res: Response) {
    try {
        const login = await loginService.loginEmail(req.body);
        if (login) {
            res.json({
                response: 1
            })
        } else {
            res.status(401).json({
                response: 0
            })
        }
    } catch (err) {
        res.status(500);
        console.log(err);
    }
}

async function loginUsername(req: Request, res: Response) {
    try {
        const login = await loginService.loginUsername(req.body);
        if (login) {
            res.json({
                response: 1
            })
        } else {
            res.status(401).json({
                response: 0
            })
        }
    } catch (err) {
        res.status(500);
        console.log(err);
    }
}

export {
    loginEmail,
    loginUsername
}