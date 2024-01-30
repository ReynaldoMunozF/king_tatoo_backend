import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export const isSuperAdmin = (req: Request, res: Response, next: NextFunction) => {
   console.log(req.tokenData);

   const roles = req.tokenData.role;

   if (!roles.includes("super_admin")) {
      return res.status(StatusCodes.FORBIDDEN).json({
         message: "You are not allowed to access this resource",
      });
   }

   next();
};