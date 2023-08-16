// Default module for controlling Users endpoint

// import Express module
import express from "express";

// Import controller function
import { getComments, addComment } from "../contollers/comment.js";

// Create router object
const router = express.Router();

// Handle get request
router.get("/", getComments);

// Handle post request
router.post("/", addComment);

export default router;
