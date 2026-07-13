import express from "express";
import cors from "cors";

import emailRoutes from "./routes/emailRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

/*
|--------------------------------------------------------------------------
| Middlewares
|--------------------------------------------------------------------------
*/

// Enable CORS
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Parse JSON Request Body
app.use(express.json());

// Parse URL Encoded Data
app.use(express.urlencoded({ extended: true }));


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

// Health Check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Email API is running successfully.",
        timestamp: new Date().toISOString(),
    });
});


// Email Routes
app.use("/api/email", emailRoutes);
// Admin Routes
app.use("/api/admin", adminRoutes);

/*
|--------------------------------------------------------------------------
| 404 Route
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found.",
    });
});


/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use((err, req, res, next) => {

    console.error("Server Error:", err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
});



export default app;