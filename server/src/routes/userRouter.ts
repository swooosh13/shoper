import Router from "express";
import userController from "../controllers/userController";
import passport from "passport";
import passportConfig from "../config/passport";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const router = new Router();

passportConfig(passport);

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', passport.authenticate('jwt', {session: false}) ,userController.check);

export default router;
