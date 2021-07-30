import Router from "express";
import itemController from "../controllers/itemController";
import passport from 'passport';
import passportConfig from '../middleware/passport';

passportConfig(passport);

const router = new (Router as any)();

router.post('/', itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getOne);

export default router;
