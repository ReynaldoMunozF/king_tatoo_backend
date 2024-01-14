import express from "express";
import authRoutes from "./routes/auth.routes";

// -----------------------------------------------------------------------------

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/api/users", authRoutes);




export default router;
