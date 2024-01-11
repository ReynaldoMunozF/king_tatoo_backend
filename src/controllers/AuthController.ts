import { Request, Response } from "express";
import { CreateUserRequestBody } from "../types/types";
import { User } from "../models/User"
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";



export class AuthController {
    async register(req: Request<{}, {}, CreateUserRequestBody>, res: Response): Promise<void | Response<any>> {
        const { username, first_name, last_name, password } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        try {
            const newUser: User = {
                username,
                first_name,
                last_name,
                password_hash: bcrypt.hashSync(password, 10)

            }
            await userRepository.save(newUser);

        res.status(StatusCodes.CREATED).json({
            message: "User created succesfully"
        })
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Error while creating user",
            });
        }
    };
    async login(req: Request, res: Response): Promise<void | Response<any>> {
        //
    };


}