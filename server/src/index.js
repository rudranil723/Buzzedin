require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const reactionRoutes = require("./routes/reactions");

// Import Middleware
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    app: "Buzzedin API"
  });
});

// Mount Routers
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reactions", reactionRoutes);

// Global Error Handler (must be after all routes)
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
