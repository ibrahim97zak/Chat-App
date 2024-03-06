import express from "express";
import protectRoute from "../../middleware/protectRoute.js";
import { getUserToSideBar } from "./controller/user.controller.js";

const router=express.Router();

router.get("/",protectRoute,getUserToSideBar)
export default router;
