import { Router, Response, Request } from "express";
import { getNews, getNewsA, createNewsA } from "./controller";


const router: Router = Router();


router.route('/news').get(getNews);
router.route('/news/:id').get(getNewsA);
router.route('/news').post(createNewsA);

export default router;