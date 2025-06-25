import express from "express";
const AuthRoutes = express.Router();
import { register, login } from "../controllers/AuthController.js";

AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);

export default AuthRoutes;
