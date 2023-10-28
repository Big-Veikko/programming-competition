import { Router, Response, Request } from "express";
import { getAlumni, getAlumnus, createAlumni, updateAlumni, deleteAlumni } from "./controller";


const router: Router = Router();


router.route('/alumni').get(getAlumni);
router.route('/alumni').post(createAlumni);
router.route('/alumni/:id').get(getAlumnus);
router.route('/alumni/:id').put(updateAlumni);
router.route('/alumni/:id').delete(deleteAlumni);

export default router;