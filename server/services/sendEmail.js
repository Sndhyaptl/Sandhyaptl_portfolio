import { transporter } from "../config/smtp.js";

import saveEmail from "./saveEmail.js";



/*
|--------------------------------------------------------------------------
| Send Email Service
|--------------------------------------------------------------------------
|
| Flow:
|
| React Contact Form
|        |
|        v
| sendEmail()
|        |
|        v
| SMTP Server
|        |
|        v
| saveEmail()
|        |
|        v
| JSON Storage
|
|--------------------------------------------------------------------------
*/


const sendEmail = async (mailData) => {


    try {


        const {
            name,
            email,
            subject,
            message,
        } = mailData;



        /*
        |--------------------------------------------------------------------------
        | Send SMTP Email
        |--------------------------------------------------------------------------
        */


        const info =
            await transporter.sendMail({


                from:
                    `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,



                to:
                    process.env.MAIL_FROM_EMAIL,



                replyTo:
                    email,



                subject,



                html: `

                    <div style="
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                    ">

                        <h2>
                            New Portfolio Contact
                        </h2>


                        <p>
                            <strong>Name:</strong>
                            ${name}
                        </p>


                        <p>
                            <strong>Email:</strong>
                            ${email}
                        </p>


                        <p>
                            <strong>Subject:</strong>
                            ${subject}
                        </p>


                        <hr/>


                        <p>
                            ${message.replace(
                                /\n/g,
                                "<br>"
                            )}
                        </p>


                    </div>

                `,


            });




        /*
        |--------------------------------------------------------------------------
        | Save Email After Successful Send
        |--------------------------------------------------------------------------
        */


        const savedEmail =
            saveEmail({

                ...mailData,

                smtpMessageId:
                    info.messageId,

            });




        return {

            success: true,

            message:
                "Message sent successfully.",


            messageId:
                info.messageId,


            email:
                savedEmail,

        };




    } catch (error) {


        console.error(
            "SMTP Send Error:",
            error.message
        );


        throw new Error(
            error.message ||
            "Failed to send email."
        );

    }


};



export default sendEmail;