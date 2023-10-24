import { Router, Response, Request } from "express";
import { getTodos, getTodo, createTodo } from "./controller";


const router: Router = Router();


router.route('/todos').get(getTodos);
router.route('/todos/:id').get(getTodo);
router.route('/todos').post(createTodo);

export default router;