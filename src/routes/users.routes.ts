import express from "express";
import { UserController } from "../controllers/UserController";
import { auth } from "../middelware/auth";

// -----------------------------------------------------------------------------

const router = express.Router();
const userController = new UserController();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.patch("/:id", auth, userController.update);
router.delete("/:id", auth, userController.delete);

export default router;
