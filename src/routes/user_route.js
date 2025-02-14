import express from 'express'
import { register } from '../controllers/user_controller.js';
import picUpload from './../backup/upload.js';
import { signUpValidator } from '../validators/userValidator.js';
import { validate } from '../validators/validate.js';
const userRouter = express.Router();
userRouter.post("/sign-up", picUpload, signUpValidator, validate, register);
export {userRouter};
