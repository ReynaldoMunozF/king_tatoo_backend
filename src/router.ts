import express from "express";
import authUserRoutes from "./routes/authUser.routes";
import authArtistRoutes from "./routes/authArtist.routes";
import userRoutes from "./routes/users.routes";
import appointmentRoutes from "./routes/appointments.routes";
import artistRoutes from "./routes/artist.routes";
// -----------------------------------------------------------------------------

const router = express.Router();

router.use("/authUser", authUserRoutes);
router.use("/authArtist", authArtistRoutes);
router.use("/api/users", userRoutes);
router.use("/api/artist", artistRoutes);
router.use("/appointments/", appointmentRoutes);

export default router;
