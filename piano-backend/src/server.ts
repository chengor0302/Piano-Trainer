import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

//Starting server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});



