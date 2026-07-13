import jwt from "jsonwebtoken";


/*
|--------------------------------------------------------------------------
| Admin Login
|--------------------------------------------------------------------------
*/


export const login = async(req,res)=>{

    try{

        const {
            username,
            password
        } = req.body;

        if(
            username !== process.env.ADMIN_USERNAME ||
            password !== process.env.ADMIN_PASSWORD
        ){

            return res.status(401).json({
                success:false,
                message:"Invalid username or password"
            });

        }


        const token = jwt.sign(
            {
                username
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );


        res.json({

            success:true,

            message:"Login successful",

            token

        });



    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};