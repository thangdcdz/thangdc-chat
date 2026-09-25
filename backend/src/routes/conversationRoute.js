import express from "express";
import {
  createConversation,
  getConversation,
  getMessage,
  maskAsSeen,
} from "../controllers/conversationController.js";
import { checkFriendship } from "../middlewares/friendMiddleware.js";

const router = express.Router();

router.post("/", checkFriendship, createConversation);
router.get("/", getConversation);
router.get("/:conversationId/messages", getMessage);
router.patch("/:conversationId/seen", maskAsSeen);

export default router;
