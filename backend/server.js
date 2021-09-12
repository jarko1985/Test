import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import serviceRoutes from "./Routes/serviceRoutes.js";
import bestSellerRoutes from "./Routes/bestSellerRoutes.js";

const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bestsellers", bestSellerRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
