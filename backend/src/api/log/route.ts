import { Router, Response, Request } from "express";
import { getLogs, getLog, createLog } from "./controller";

const router: Router = Router();

router.route('/logs').get(getLogs);
router.route('/log/:id').get(getLog);
router.route('/log').post(createLog);

export default router;
