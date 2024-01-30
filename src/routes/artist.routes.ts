import express from "express";
import { ArtistController } from "../controllers/ArtistController";
import { AppointmentController } from "../controllers/AppointmentController";
import { isAdmin } from "../middleware/isAdmin";
import { authArtist } from "../middleware/authArtist";

// -----------------------------------------------------------------------------

const router = express.Router();
const artistController = new ArtistController();
const appointmentController = new AppointmentController();

router.get("/", artistController.getAll);
router.get("/:id", authArtist, isAdmin, artistController.getById);
router.post("/", artistController.create);
router.patch("/:id", authArtist, isAdmin, artistController.update);
router.delete("/:id", authArtist, isAdmin, artistController.delete);
router.get("/:id/appointments", authArtist, appointmentController.getByArtist);

export default router;
