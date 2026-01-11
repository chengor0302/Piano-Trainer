import { Router } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key_change_me";

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("✅ Login request body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // חיפוש משתמש
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // בדיקת סיסמה
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // יצירת token חדש
    const token = jwt.sign(
      { userId: existingUser.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    // החזרת token ללקוח
    res.json({ token });

  } catch (error) {
    console.error("❌ LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});


export default router;
