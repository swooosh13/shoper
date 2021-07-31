import Router from "express";
import itemController from "../controllers/itemController";

const router = new (Router as any)();

router.post('/', itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getOne);

router.get('/info/:id', itemController.getItemInfo);
router.post('/info', itemController.setItemInfo);

export default router;
