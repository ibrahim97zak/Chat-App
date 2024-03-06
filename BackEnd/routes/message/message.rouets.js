import express from "express";
import { getMessages, sendMessage } from "./controller/message.controller.js";
import protectRoute from "../../middleware/protectRoute.js";

const router=express.Router();

router.post("/send/:id",protectRoute,sendMessage)//protectRoute is for doing autharization of the user befor sending the message
router.get("/:id",protectRoute,getMessages)
export default router;
