import BestSeller from "../models/BestSellersModel.js";
import asyncHandler from "express-async-handler";

const getBestSellers = asyncHandler(async (req, res) => {
  const bestSellers = await BestSeller.find({});
  res.json(bestSellers);
});

export { getBestSellers };
