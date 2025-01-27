import express from "express";
import { createPost, getAllPosts,updatePost } from "../controllers/post_controllers.js";

const route = express.Router();
route.post("/create",createPost);
route.get("/all-posts",getAllPosts);
route.put("/update-post/:id",updatePost);
export default route