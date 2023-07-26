// Create express server
import express from "express";

// Import external module
import cookieParser from "cookie-parser";
import cors from "cors";

// Import routes
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import authRoutes from "./routes/auth.js";

// Create server object
const app = express();

// Create routes middlewares
app.use(express.json()); // Allow us to parse data to json object
app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("API working");
});
