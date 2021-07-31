import Router from "express";
import itemController from "../controllers/itemController";

const router = new (Router as any)();

router.post('/', itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getOne);

export default router;
