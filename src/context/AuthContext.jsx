import {
    createContext,
    useContext,
    useState,
} from "react";


const AuthContext = createContext();



const API_URL =
    "http://localhost:5000/api/admin";



export const AuthProvider = ({
    children
}) => {


    const [token, setToken] =
        useState(
            localStorage.getItem("token")
        );




    /*
    |--------------------------------------------------------------------------
    | Admin Login
    |--------------------------------------------------------------------------
    */

    const login = async (
        username,
        password
    ) => {


        try {


            const response =
                await fetch(

                    `${API_URL}/login`,

                    {
                        method:"POST",

                        headers:{

                            "Content-Type":
                            "application/json"

                        },

                        body:
                        JSON.stringify({

                            username,

                            password

                        })

                    }

                );





            const data =
                await response.json();





            if(!response.ok){


                return {

                    success:false,

                    message:
                    data.message ||
                    "Login failed"

                };


            }





            localStorage.setItem(

                "token",

                data.token

            );



            setToken(
                data.token
            );





            return {

                success:true,

                token:data.token

            };



        }
        catch(error){


            console.error(
                "Login Error:",
                error
            );



            return {

                success:false,

                message:
                "Server connection failed"

            };


        }


    };







    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */


    const logout = ()=>{


        localStorage.removeItem(
            "token"
        );


        setToken(null);


    };








    /*
    |--------------------------------------------------------------------------
    | Check Token
    |--------------------------------------------------------------------------
    */


    const isAuthenticated =
        Boolean(token);








    return (

        <AuthContext.Provider

            value={{

                token,

                login,

                logout,

                isAuthenticated

            }}

        >

            {children}


        </AuthContext.Provider>

    );


};








export const useAuth = ()=>{


    const context =
        useContext(
            AuthContext
        );



    if(!context){


        throw new Error(

            "useAuth must be used inside AuthProvider"

        );


    }



    return context;


};