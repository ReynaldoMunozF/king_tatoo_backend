import express from "express";
import authRoutes from "./routes/auth.routes";

// -----------------------------------------------------------------------------

const router = express.Router();

router.use("auth", authRoutes);
router.use("/api/users", authRoutes);

// User routes
//router.use("/api/users", userRoutes);

export default router;
