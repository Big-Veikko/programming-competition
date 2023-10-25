import { Router } from "express";
import { getEvents, getEvent, createEvent, updateEvent, deleteEvent, attendEvent, unattendEvent, approveEvent } from "./controller";


const router: Router = Router();


router.route("/event").get(getEvents);
router.route("/event/:id").get(getEvent);
router.route("/event").post(createEvent);
router.route("/event/:id").put(updateEvent);
router.route("/event/:id").delete(deleteEvent);
router.route("/event/attend/:id").post(attendEvent);
router.route("/event/attend/:id").delete(unattendEvent);
router.route("/event/approve/:id").post(approveEvent);

export default router;