import Router from "express";
import userController from "../controllers/userController";
import { authMiddleware } from "../middleware/passport";

const router = new (Router as any)();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

export default router;
