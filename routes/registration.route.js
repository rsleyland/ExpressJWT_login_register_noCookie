import express from "express";
const RegistrationRouter = express.Router();
import { userRegistrationHandler, adminRegistrationHandler } from '../controllers/registration.controller.js'
import { adminRoute } from '../middlewares/userAccess.middleware.js';


RegistrationRouter.post('/admin', adminRoute, adminRegistrationHandler);    //ONLY ADMINS CAN CREATE ADMINS
RegistrationRouter.post('/user', userRegistrationHandler);

export { RegistrationRouter };