import express from 'express'
import { register } from '../controllers/user_controller.js';
import picUpload from '../middleware/upload.js';
import { signUpValidator } from '../validators/userValidator.js';
const userRouter = express.Router();
userRouter.post("/sign-up", picUpload, signUpValidator,  register);
export {userRouter};
