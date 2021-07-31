import Router from "express";
import { authMiddleware } from "../middleware/passport";
import brandController from "../controllers/brandController";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware";
const router = new (Router as any)();


router.post('/', authMiddleware, checkRoleMiddleware('ADMIN'), brandController.create);
router.get('/', brandController.getAll);

export default router;
