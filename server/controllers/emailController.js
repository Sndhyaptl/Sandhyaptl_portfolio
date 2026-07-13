import sendEmail from "../services/sendEmail.js";


import {
    getAllEmails,
    getEmailById,
    searchEmails,
    deleteEmail,
} from "../services/getEmails.js";


import {
    markAsRead,
    toggleStar,
} from "../services/updateEmail.js";



/*
|--------------------------------------------------------------------------
| Send Email
| POST /api/email/send
|--------------------------------------------------------------------------
*/

export const send = async (req, res) => {

    try {


        const {
            name,
            email,
            subject,
            message,
        } = req.body;



        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            return res.status(400).json({

                success:false,

                message:
                "Name, Email, Subject and Message are required."

            });

        }



        const result =
            await sendEmail({

                name,
                email,
                subject,
                message,

            });



        return res.status(200).json(result);



    }
    catch(error){


        console.error(
            "Send Email Error:",
            error
        );


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }

};





/*
|--------------------------------------------------------------------------
| Get All Emails
| GET /api/email
|--------------------------------------------------------------------------
*/

export const getAll = (req,res)=>{


    try {


        const emails =
            getAllEmails();



        return res.json({

            success:true,

            count:
            emails.length,

            data:emails

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







/*
|--------------------------------------------------------------------------
| Get Email By ID
| GET /api/email/:id
|--------------------------------------------------------------------------
*/

export const getById = (req,res)=>{


    try {


        const email =
            getEmailById(
                req.params.id
            );



        if(!email){

            return res.status(404).json({

                success:false,

                message:
                "Email not found."

            });

        }



        return res.json({

            success:true,

            data:email

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







/*
|--------------------------------------------------------------------------
| Search Emails
| GET /api/email/search?q=
|--------------------------------------------------------------------------
*/

export const search = (req,res)=>{


    try {


        const keyword =
            req.query.q || "";



        const emails =
            searchEmails(
                keyword
            );



        return res.json({

            success:true,

            count:
            emails.length,

            data:emails

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







/*
|--------------------------------------------------------------------------
| Delete Email
| DELETE /api/email/:id
|--------------------------------------------------------------------------
*/

export const remove = (req,res)=>{


    try {


        const deleted =
            deleteEmail(
                req.params.id
            );



        if(!deleted){


            return res.status(404).json({

                success:false,

                message:
                "Email not found."

            });


        }



        return res.json({

            success:true,

            message:
            "Email deleted successfully."

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







/*
|--------------------------------------------------------------------------
| Mark Email Read
| PUT /api/email/:id/read
|--------------------------------------------------------------------------
*/

export const markRead = (req,res)=>{


    try {


        const email =
            markAsRead(
                req.params.id
            );



        if(!email){


            return res.status(404).json({

                success:false,

                message:
                "Email not found."

            });


        }



        return res.json({

            success:true,

            data:email

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







/*
|--------------------------------------------------------------------------
| Star / Unstar Email
| PUT /api/email/:id/star
|--------------------------------------------------------------------------
*/

export const starEmail = (req,res)=>{


    try {


        const email =
            toggleStar(
                req.params.id
            );



        if(!email){


            return res.status(404).json({

                success:false,

                message:
                "Email not found."

            });


        }



        return res.json({

            success:true,

            data:email

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};