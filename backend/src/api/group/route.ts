import { Router, Response, Request } from "express";
import {
	getGroups,
	getGroup,
	createGroup,
	deleteGroup,
	updateGroup,
	addGroupMember,
} from "./controller";

const router: Router = Router();

router.route("/group").get(getGroups);
router.route("/group/:id").get(getGroup);
router.route("/group").post(createGroup);
router.route("/group/:id").put(updateGroup);
router.route("/group/:id").delete(deleteGroup);

router.route("/group/join/:id").put(addGroupMember);

export default router;
