import express from "express";

import {
    send,
    getAll,
    getById,
    search,
    remove,
    markRead,
    starEmail,
} from "../controllers/emailController.js";


const router = express.Router();


/*
|--------------------------------------------------------------------------
| Email Routes
|--------------------------------------------------------------------------
*/


// Send Email
router.post("/send", send);


// Search Emails
router.get("/search", search);


// Get All Emails
router.get("/", getAll);


// Get Email By ID
router.get("/:id", getById);


// Delete Email
router.delete("/:id", remove);



export default router;