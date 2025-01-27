import express from "express";
import { createPost } from "../controllers/post_controllers.js";

const route = express.Router();
route.post("/create",createPost);
export default route