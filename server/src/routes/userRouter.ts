import Router from "express";
import userController from "../controllers/userController";
import passport from "passport";

const router = new (Router as any)();

let authMiddleware = passport.authenticate('jwt', {session: false});

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

export default router;
