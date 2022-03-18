import express from "express";
const LoginRouter = express.Router();
import { loginHandler } from '../controllers/login.controller.js'


LoginRouter.post('/', loginHandler);

export { LoginRouter };