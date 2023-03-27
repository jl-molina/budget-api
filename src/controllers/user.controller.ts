import { Request, Response} from "express";
import * as userService from "../services/user.service";

async function getAllUsers(_req: Request, res: Response) {
    try {
        res.json(await userService.getAllUsers())
    } catch (err) {
        res.status(500);
        console.log(err);
    }
}

async function signUp(req: Request, res: Response) {
    try {
        await userService.createUser(req.body);
        res.status(201).json({
            message: 'user created',
        });
    } catch (err) {
        res.status(500);
        console.log(err);
    }
}

export {
    getAllUsers,
    signUp
}