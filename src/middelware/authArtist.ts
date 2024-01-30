import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload, decode } from "jsonwebtoken";
import { ArtistTokenData,  } from "../types/types";

// -----------------------------------------------------------------------------

export const authArtist = (req: Request, res: Response, next: NextFunction) => {
   req.headers;

   const token = req.headers.authorization?.split(" ")[1];

   console.log(token)

   if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
         message: "no hay token Unauthorized",
      });
   }

   try {
      
      const decoded = jwt.verify(token, "123") as JwtPayload;

      console.log(decoded);

      const decodedPayload: ArtistTokenData = {
        
         tattoo_artist_id: decoded.tattoo_artist_id,
         role: decoded.role,
      };

      req.tokenData = decodedPayload;

      next();
   } catch (error) {
      res.status(StatusCodes.UNAUTHORIZED).json({
         message: "soy el Unauthorized del catch",
      });
   }
};