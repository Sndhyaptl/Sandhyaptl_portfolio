import nodemailer from "nodemailer";


/*
|--------------------------------------------------------------------------
| SMTP Transporter Configuration
|--------------------------------------------------------------------------
*/

const transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,

    port: Number(process.env.SMTP_PORT),

    secure: process.env.SMTP_SECURE === "true",

    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },

});


/*
|--------------------------------------------------------------------------
| Verify SMTP Connection
|--------------------------------------------------------------------------
*/

const verifySMTP = async () => {

    try {

        await transporter.verify();

        console.log("✅ SMTP Server Connected Successfully");


    } catch (error) {

        console.error(
            "❌ SMTP Connection Failed:",
            error.message
        );

        throw error;

    }

};


export {
    transporter,
    verifySMTP,
};