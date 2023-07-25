// Controller function to handle request via auth route

// Import external modules

import bcrypt from "bcryptjs";
import { db } from "../connect.js";

export const register = (req, res) => {
  // Check if User exist
  // DB Query
  const q = "SELECT * FROM users WHERE username = ?";

  // Send Query to DB
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exist");

    // Create new user
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // Create User
    const q =
      "INSERT INTO users (`username`,`email`, `password`, `name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
