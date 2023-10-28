import { Router, Response, Request } from "express";
import { sendEmail } from "./controller";


const router: Router = Router();


router.route('/mail/send').post(sendEmail);

export default router;