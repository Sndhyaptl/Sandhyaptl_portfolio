import {
    useState
} from "react";


import {
    useNavigate
} from "react-router-dom";


import {
    useAuth
} from "../../context/AuthContext";


import "./Login.css";



const Login =()=>{


    const {
        login
    } = useAuth();



    const navigate =
        useNavigate();



    const [username,setUsername]
        = useState("");



    const [password,setPassword]
        = useState("");



    const [error,setError]
        = useState("");





    const submit = (e)=>{


        e.preventDefault();



       const result =
    login(
        username,
        password
    );


        if(result){

            navigate("/emails");

        }
        else{

            setError(
                "Invalid username or password"
            );

        }


        if(result){

            navigate(
                "/emails"
            );

        }
        else{

            setError(
                "Invalid username or password"
            );

        }


    };





    return (

        <div className="login-page">


            <form
                onSubmit={submit}
                className="login-box"
            >


                <h2>
                    Admin Login
                </h2>



                {
                    error &&
                    <p className="error">
                        {error}
                    </p>
                }



                <input

                    placeholder="Username"

                    value={username}

                    onChange={(e)=>
                        setUsername(
                            e.target.value
                        )
                    }

                />



                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e)=>
                        setPassword(
                            e.target.value
                        )
                    }

                />



                <button>

                    Login

                </button>


            </form>


        </div>

    );

};


export default Login;