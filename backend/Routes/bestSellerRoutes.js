import express from "express";
const router = express.Router();

import { getBestSellers } from "../controllers/bestSellerController.js";

router.route("/").get(getBestSellers);

export default router;
