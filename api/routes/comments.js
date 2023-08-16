// Default module for controlling Users endpoint

// import Express module
import express from "express";

// Import controller function
import { getComments } from "../contollers/comment.js";

// Create router object
const router = express.Router();

// handle get request
router.get("/", getComments);

export default router;
