import { Router, Response, Request } from "express";
import { getNews, getNewsA, createNewsA } from "./controller";


const router: Router = Router();


router.route('/todos').get(getNews);
router.route('/todos/:id').get(getNewsA);
router.route('/todos').post(createNewsA);

export default router;