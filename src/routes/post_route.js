import express from "express";
import { createPost, getAllPosts,updatePost, deletePost } from "../controllers/post_controllers.js";

const route = express.Router();
route.post("/create",createPost);
route.get("/get-all",getAllPosts);
route.put("/update/:id",updatePost);
route.delete("/delete/:id",deletePost);
export default route