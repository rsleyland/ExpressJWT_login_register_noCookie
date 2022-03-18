import express from "express";
import 'dotenv/config';
import './db_connect.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));


// ROUTES
import { RegistrationRouter } from "./routes/registration.route.js";
import { LoginRouter } from "./routes/login.route.js";
app.use('/registration', RegistrationRouter);
app.use('/login', LoginRouter);

// PORT and START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));