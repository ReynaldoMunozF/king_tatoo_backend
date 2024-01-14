import { Request, Response } from "express";
import { CreateArtistRequestBody, LoginUserRequestBody, TokenData } from "../types/types";
import { Tattoo_artist } from "../models/tatoo_artist";
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export class AuthArtistController {
  async register(
    req: Request<{}, {}, CreateArtistRequestBody>,
    res: Response
  ): Promise<void | Response<any>> {
    const { nickname, first_name, last_name, password, email,  } =
      req.body;

    const artistRepository = AppDataSource.getRepository(Tattoo_artist);
    
    try {
      const newArtist: Tattoo_artist = {
        nickname,
        first_name,
        last_name,
        email,
        password: bcrypt.hashSync(password, 10),
      };

      await artistRepository.save(newArtist);

      res.status(StatusCodes.CREATED).json({
        message: "User created succesfully",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while creating user",
      });
    }
  }
  async login(req: Request<{}, {}, LoginUserRequestBody>, res: Response): Promise<void | Response<any>> {
    
        const { password, email,} = req.body;
    
        const artistRepository = AppDataSource.getRepository(Tattoo_artist);
        try {
          if(!email || !password){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Email or password is required"
            });

          }
          const user = await artistRepository.findOne({
            where: {
              email: email,
            },
          });
          if(!user){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Bad email or password"
            });
          }
          const isPasswordValid = bcrypt.compareSync(password, user.password)
          
          if(!isPasswordValid){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Bad email or password"
            });
          }
          
          // generar token

          // const tokenPayload : TokenData = {
          //   userId: user.id?.toString() as string,
          //   userRoles: 
          // }
    
          res.status(StatusCodes.OK).json({
            message: "login succesfully",
          });
        } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while login",
          });
        }
  }
}
