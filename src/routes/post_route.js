import express from "express";
import { createPost, getAllPosts } from "../controllers/post_controllers.js";

const route = express.Router();
route.post("/create",createPost);
route.get("/all-posts",getAllPosts);
export default route