import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/User";

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  models: [User],
});
