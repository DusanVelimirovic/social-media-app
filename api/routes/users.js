// Default module for controlling Users endpoint

// import Express module
import express from "express";

// Import controller function
import { getUser } from "../contollers/user.js";

// Create router object
const router = express.Router();

// handle get request
// Find user with id
router.get("/find/:userId", getUser);

export default router;
