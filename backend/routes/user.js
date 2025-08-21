import express from "express";
import { verifyRole, verifyToken } from "../middleware/authMiddleware.js";
import { deleteUser, getProfile, getUsers } from "../controllers/userControler.js";

const router = express.Router();

// Only admin can see all users
router.get("/", verifyToken, verifyRole("admin"), getUsers);

// Only admin can delete a user
router.delete("/:id", verifyToken, verifyRole("admin"), deleteUser);

// Any logged-in user can see their profile
router.get("/me", verifyToken, getProfile);

export default router;
