import Category from "../models/CategoryModel.js";
import asyncHandler from "express-async-handler";

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
});

export { getCategories };
