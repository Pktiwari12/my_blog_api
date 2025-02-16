import express from 'express'
import { register, sendVerificationEmail, verifyUserByCode,forgotPassword } from '../controllers/user_controller.js';
import picUpload from './../backup/upload.js';
import { signUpValidator,emailValidtor, verifyUserValidator } from '../validators/userValidator.js';
import { validate } from '../validators/validate.js';
const userRouter = express.Router();
userRouter.post("/sign-up", picUpload, signUpValidator, validate, register);
userRouter.post("/send-mail-verification", emailValidtor, validate, sendVerificationEmail);
userRouter.post("/verify-user", verifyUserValidator, validate, verifyUserByCode);
userRouter.post("/forgot-password",emailValidtor, validate,forgotPassword);

export {userRouter};
