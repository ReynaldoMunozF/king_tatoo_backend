import express from "express";
import { ArtistController } from "../controllers/ArtistController";
import { isAdmin } from "../middelware/isAdmin";
import { authArtist } from "../middelware/authArtist";

// -----------------------------------------------------------------------------

const router = express.Router();
const artistController = new ArtistController();

router.get("/", artistController.getAll);
router.get("/:id", authArtist ,isAdmin, artistController.getById);
router.post("/", artistController.create);
router.patch("/:id", authArtist ,isAdmin,artistController.update);
router.delete("/:id", authArtist ,isAdmin, artistController.delete);

export default router;
