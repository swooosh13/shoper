import Router from "express";
import passport from "passport";
import typeController from "../controllers/typeController";
import { authMiddleware } from "../middleware/passport";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware";

const router = new (Router as any)();

router.post("/", authMiddleware, checkRoleMiddleware('ADMIN'), typeController.create);
router.get("/", authMiddleware, typeController.getAll);

export default router;
