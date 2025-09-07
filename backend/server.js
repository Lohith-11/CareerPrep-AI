require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");
const {
  generateInterviewQuestions,
  generateConceptExplanation,
} = require("./controllers/aiController");
const { protect } = require("./middlewares/authMiddleware");

const app = express();

//Middleware to handle CORS
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? [process.env.FRONTEND_URL] : "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

connectDB();

//Middleware to parse JSON bodies
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

//Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "CareerPrep AI Backend is running successfully!",
    timestamp: new Date().toISOString()
  });
});

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
