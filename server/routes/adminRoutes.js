import express from "express";

import {
    login,
} from "../controllers/adminController.js";


const router = express.Router();


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/


// Admin Login
router.post("/login", login);



export default router;