import express from "express";
import dotenv from "dotenv";
import color from "colors";
import connectDB from "./DBconnector/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";
dotenv.config();

//connect to DB
connectDB();
//path for deployment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"./client/build")))
//route formats
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`.bgCyan.white
  );
});