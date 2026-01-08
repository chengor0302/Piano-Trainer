import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key_change_me";

// Registration route
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, nickname, password, avatarUrl } = req.body;

    // Validate input
    if (!email || !nickname || !password) {
      return res.status(400).json({
        error: "Email, nickname, and password are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters long",
      });
    }

    // Check if user already exists
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        error: "User with this email already exists",
      });
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insert user into database
    const result = await pool.query(
      `INSERT INTO users (email, password_hash, nickname, avatar_url)
       VALUES ($1, $2, $3, $4)
       RETURNING id, email, nickname, avatar_url, created_at`,
      [email, passwordHash, nickname, avatarUrl || null]
    );

    const user = result.rows[0];

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Return success response with token
    res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        avatarUrl: user.avatar_url,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

export default router;
