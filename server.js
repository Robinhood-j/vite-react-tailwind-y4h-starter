import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import incidentRoutes from "./routes/incidentRoutes.js";

// ✅ Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5176;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/posts", postRoutes);
app.use("/api/incidents", incidentRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Server is running!",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

// ✅ Health check route
console.log("📡 Registering /health route...");

app.get("/health", (req, res) => {
  console.log("🩺 Health check endpoint hit!"); // 👈 This logs every time /health is accessed

  res.json({
    status: "OK",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

console.log("✅ /health route registered!");

// ✅ MongoDB connection
const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");
    if (!process.env.MONGODB_URI)
      throw new Error("MONGODB_URI is not defined in .env");

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

// ✅ MongoDB connection events
mongoose.connection.on("connected", () => console.log("✅ MongoDB ready"));
mongoose.connection.on("error", (err) =>
  console.error("❌ MongoDB connection error:", err)
);

// ✅ Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🎯 Server running on port ${PORT}`);
    console.log(`🌐 Health check: http://localhost:${PORT}/health`);
  });
};

startServer();
