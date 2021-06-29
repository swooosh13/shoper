import Router from "express";

import itemRouter from "./itemRouter";
import brandRouter from "./brandRouter";
import typeRouter from "./typeRouter";
import userRouter from "./userRouter";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const router = new Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/item', itemRouter);

export default router;
