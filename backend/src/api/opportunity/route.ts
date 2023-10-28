import { Router, Request, Response } from "express";
import {
  getOpps,
  getOpp,
  createOpp,
  updateOpps,
  deleteOpps,
} from "./controller";

const router: Router = Router();

router.route("/Opps").get(getOpps);
router.route("/Opp/:id").get(getOpp);
router.route("/Opp").post(createOpp);
router.route("Opp/:id").put(updateOpps);
router.route("Opp/ :id").delete(deleteOpps);
export default router;
