import express from "express";
import authUserRoutes from "./routes/authUser.routes";
import authArtistRoutes from "./routes/authArtist.routes";
import userRoutes from "./routes/users.routes";

// -----------------------------------------------------------------------------

const router = express.Router();

router.use("/authUser", authUserRoutes);
router.use("/authArtist", authArtistRoutes);

router.use("/api/users", userRoutes);




export default router;
