import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./db"; 
import authRoutes from "./routes/auth.routes"; 

dotenv.config();
import "reflect-metadata";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  console.log("✅ Test route hit");
  res.json({ message: "OK" });
});


app.use("/auth", authRoutes);


sequelize.sync().then(() => {
  console.log("📦 Database connected and synced");
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
});
