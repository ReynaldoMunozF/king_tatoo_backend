import express from "express";
import { AppointmentController } from "../controllers/AppointmentController";
import { authArtist } from "../middleware/authArtist";
import { isAdmin } from "../middleware/isAdmin";
import { auth } from "../middleware/auth";

// ----
const router = express.Router();
const appointmentController = new AppointmentController();

router.get("/", authArtist, isAdmin, appointmentController.getAll);
router.post("/", auth,appointmentController.create);
router.patch("/:id", auth, appointmentController.update);
router.delete("/:id", auth,  appointmentController.delete);

export default router;
