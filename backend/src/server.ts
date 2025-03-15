import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes"; // Importing auth routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Test Route to Ensure Backend is Running
app.get("/", (req, res) => {
  res.send({ message: "Backend is running successfully!" });
});

// ✅ Register Authentication Routes
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
