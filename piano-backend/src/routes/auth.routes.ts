import { Router } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cloudinary from "cloudinary";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key_change_me";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dinqsvekq",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const authMiddleware = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// -------------------- REGISTER --------------------
router.post("/register", async (req, res) => {
  const { email, password, nickname, avatarUrl } = req.body;
  try {
    console.log("✅ Register request body:", req.body);

    if (!email || !password || !nickname) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword, nickname, avatarUrl });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

    res.json({ token });
  } catch (err) {
    console.error("❌ REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------- LOGIN --------------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("✅ Login request body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) return res.status(400).json({ message: "User does not exist" });

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: existingUser.id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("❌ LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------- GET PROFILE --------------------
router.get("/profile", authMiddleware, async (req: any, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["nickname", "avatarUrl", "email"],
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("❌ PROFILE ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------- UPDATE AVATAR --------------------
router.put("/profile", authMiddleware, async (req: any, res) => {
  const { avatarUrl, oldAvatarUrl } = req.body;

  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    //TO DO- fix destroying old picture from db
    // if (oldAvatarUrl) {
    //   const segments = oldAvatarUrl.split("/");
    //   const publicIdWithExt = segments[segments.length - 1]; // filename.jpg
    //   const publicId = publicIdWithExt.split(".")[0]; // filename בלבד
    //   await cloudinary.v2.uploader.destroy(publicId);
    // }

    if (avatarUrl) user.avatarUrl = avatarUrl;
    await user.save();

    res.json({ nickname: user.nickname, avatarUrl: user.avatarUrl, email: user.email });
  } catch (err) {
    console.error("❌ UPDATE PROFILE ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
