import { Router, Response, Request } from "express";
import {
	getGroups,
	getGroup,
	createGroup,
	deleteGroup,
	updateGroup,
	addGroupMember,
	deleteGroupMember,
    updateGroupMember,
    getGroupMembers,
    getGroupMember
} from "./controller";

const router: Router = Router();

router.route("/group").get(getGroups);
router.route("/group/:id").get(getGroup);
router.route("/group").post(createGroup);
router.route("/group/:id").put(updateGroup);
router.route("/group/:id").delete(deleteGroup);
router.route("/group/members").get(getGroupMembers);
router.route("/group/members/:id").put(addGroupMember);
router.route("/group/members/:id").put(deleteGroupMember);
router.route("/group/members/:id").put(updateGroupMember);
router.route("/group/members/:id").get(getGroupMember);

export default router;
