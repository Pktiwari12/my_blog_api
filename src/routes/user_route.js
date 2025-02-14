import express from 'express'
import { register, sendVerificationEmail } from '../controllers/user_controller.js';
import picUpload from './../backup/upload.js';
import { signUpValidator,emailValidtor } from '../validators/userValidator.js';
import { validate } from '../validators/validate.js';
const userRouter = express.Router();
userRouter.post("/sign-up", picUpload, signUpValidator, validate, register);
userRouter.post("/send-mail-verification", emailValidtor, validate, sendVerificationEmail)
export {userRouter};
