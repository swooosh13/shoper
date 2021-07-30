import Router from "express";
import brandController from "../controllers/brandController";
const router = new (Router as any)();

router.post('/', brandController.create);
router.get('/', brandController.getAll);

export default router;
