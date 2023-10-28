import { Router, Request, Response } from "express";
import {
  getOpps,
  getOpp,
  createOpp,
  updateOpps,
  deleteOpps,
} from "./controller";

const router: Router = Router();

router.route("/opps").get(getOpps);
router.route("/opp/:id").get(getOpp);
router.route("/opp").post(createOpp);
router.route("opp/:id").put(updateOpps);
router.route("opp/ :id").delete(deleteOpps);
export default router;
