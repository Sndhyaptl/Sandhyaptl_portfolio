import dotenv from "dotenv";

dotenv.config({
    path:"./server/.env"
});


import app from "./app.js";


const PORT =
process.env.PORT || 5000;



app.listen(
    PORT,
    ()=>{

        console.log(
            "================================="
        );

        console.log(
            `🚀 Server running on http://localhost:${PORT}`
        );

        console.log(
            "================================="
        );

    }
);