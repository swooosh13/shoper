import Router from "express";
import brandController from "../controllers/brandController";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const router = new Router();

router.post('/', brandController.create);
router.get('/', brandController.getAll);

export default router;
