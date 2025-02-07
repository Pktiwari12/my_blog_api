import express from 'express'
import { register } from '../controllers/user_controller.js';
import upload from '../middleware/upload.js';
import { signUpValidator } from '../validators/userValidator.js';
const userRouter = express.Router();
userRouter.post("/sign-up", upload.single("profileImage"), signUpValidator,  register);
export {userRouter};
