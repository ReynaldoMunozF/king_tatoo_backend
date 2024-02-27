import { Request, Response } from "express";
import { CreateArtistRequestBody, LoginUserRequestBody, ArtistTokenData } from "../types/types";
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
    const { nickname, first_name, last_name, password, email, role,  description } =
      req.body;

    const artistRepository = AppDataSource.getRepository(Tattoo_artist);
    
    try {
      const newArtist: Tattoo_artist = {
        nickname,
        description,
        first_name,
        last_name,
        email,
        password: bcrypt.hashSync(password, 10),
        role,
        

        // rolename: [ArtistRoles.ADMIN]
      };

      await artistRepository.save(newArtist);

      res.status(StatusCodes.CREATED).json({
        message: "Artist created succesfully",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while creating Artist",
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
          const artist = await artistRepository.findOne({
            where: {
              email: email,
            },
          });
          if(!artist){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Bad email or password"
            });
          }
          const isPasswordValid = bcrypt.compareSync(password, artist.password)
          
          if(!isPasswordValid){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Bad email or password"
            });
          }
          
          const tokenPayload: ArtistTokenData = {
            tattoo_artist_id: artist.id?.toString() as string,
            role: artist.role,
            
            
         };

         const token = jwt.sign(tokenPayload, "123", {
            expiresIn: "3h",
         });
    
          res.status(StatusCodes.OK).json({
            message: "login succesfully",
            token,
          });
        } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while login",
          });
        }
  }
}
