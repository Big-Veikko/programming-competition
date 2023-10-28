import { Router, Response, Request } from "express";
import { getUniversities, getUniversity, registerUniversity, updateUniversity, deleteUniversity } from "./controller";


const router: Router = Router();


router.route("/university").get(getUniversities);
router.route("/university/:id").get(getUniversity);
router.route("/university").post(registerUniversity);
router.route("/university/:id").delete(deleteUniversity);
router.route("/university/:id").put(updateUniversity);

export default router;