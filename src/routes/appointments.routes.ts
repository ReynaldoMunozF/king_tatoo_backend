import express from "express";
import { AppointmentController } from "../controllers/AppointmentController";
import { authArtist } from "../middleware/authArtist";
import { isSuperAdmin } from "../middleware/isSuperAdmin";

// ----
const router = express.Router();
const appointmentController = new AppointmentController();

router.get("/",  appointmentController.getAll);
router.post("/", appointmentController.create);
router.patch("/:id", appointmentController.update);
router.delete("/:id", appointmentController.delete);

export default router;
