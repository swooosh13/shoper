import Router from "express";
import typeController from "../controllers/typeController";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const router = new Router();

router.post('/', typeController.create);
router.get('/', typeController.getAll);

export default router;
