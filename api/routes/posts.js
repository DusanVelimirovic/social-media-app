// Default module for controlling Users endpoint

// import Express module
import express from "express";

// Import controller function
import { getPosts } from "../contollers/post.js";

// Create router object
const router = express.Router();

// handle get request
// Calling getPosts method - bussines logic
router.get("/", getPosts);

export default router;
