import { Router, Response, Request } from "express";
import {
	getFundraisers,
	getFundraiser,
	getOngoingFundraisers,
	createFundraiser,
	updateFundraiser,
	deleteFundraiser,
	approveFundraiser,
} from "./controller";

const router: Router = Router();

router.route("/fundraiser").get(getFundraisers);
router.route("/fundraiser/:id").get(getFundraiser);
router.route("/fundraiser").post(createFundraiser);
router.route("/fundraiser/:id").put(updateFundraiser);
router.route("/fundraiser/ongoing").get(getOngoingFundraisers);
router.route("/fundraiser/:id").delete(deleteFundraiser);
router.route("/fundraiser/approve/:id").put(approveFundraiser);

export default router;
