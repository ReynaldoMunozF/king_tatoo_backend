import express from "express";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";

// -----------------------------------------------------------------------------

const router = express.Router();

router.use("/auth", authRoutes);

router.use("/api/users", userRoutes);




export default router;
