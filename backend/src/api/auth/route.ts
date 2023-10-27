import { Router, Response, Request } from "express";
import { login, register, getUser, updateUser, deleteUser, resetPassword  } from "./controller";


const router: Router = Router();


router.route('/auth/login').post(login);
router.route('/auth/register').post(register);
router.route('/auth/user/:id').get(getUser);
router.route('/auth/user/:id').put(updateUser);
router.route('/auth/user/:id').delete(deleteUser);
router.route('/auth/user/reset-password/:id').post(resetPassword);


export default router;