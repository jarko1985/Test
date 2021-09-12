import express from "express";
const router = express.Router();
import { getServices } from "../controllers/serviceController.js";

router.route("/").get(getServices);

export default router;
