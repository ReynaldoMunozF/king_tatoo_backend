import express from "express";
import { AuthArtistController } from "../controllers/AuthArtistController";
import { isSuperAdmin } from "../middleware/isSuperAdmin";
import { authArtist } from "../middleware/authArtist";

// -----------------------------------------------------------------------------

const router = express.Router();
const authArtistController = new AuthArtistController();

router.post(
  "/register",
  
  authArtistController.register
);
router.post("/login", authArtistController.login);

export default router;
