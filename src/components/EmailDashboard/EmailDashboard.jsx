import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getEmails,
    deleteEmail,
} from "../../services/emailService";

import {
    FaBars,
    FaEnvelope,
    FaStar,
    FaTrash,
    FaSearch,
    FaInbox,
    FaPaperPlane,
} from "react-icons/fa";

import "./EmailDashboard.css";


const EmailDashboard = () => {


    const [emails, setEmails] = useState([]);

    const [filteredEmails, setFilteredEmails] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");


    const navigate = useNavigate();

    const loadEmails = async () => {

        try {

            const response = await getEmails();

            const data = response.data || [];

            setEmails(data);

            setFilteredEmails(data);


        } catch (error) {

            console.error(error);

        }
        finally {

            setLoading(false);

        }

    };




    useEffect(() => {

        loadEmails();

    }, []);





    const handleSearch = (e) => {

        const value =
            e.target.value.toLowerCase();


        setSearch(value);



        const result =
            emails.filter((email) =>

                email.name
                    ?.toLowerCase()
                    .includes(value)

                ||

                email.from
                    ?.toLowerCase()
                    .includes(value)

                ||

                email.subject
                    ?.toLowerCase()
                    .includes(value)

            );


        setFilteredEmails(result);

    };






    const handleDelete = async (id) => {


        const confirmDelete =
            window.confirm(
                "Delete this email?"
            );


        if (!confirmDelete)
            return;



        await deleteEmail(id);


        loadEmails();

    };





    if (loading) {

        return (

            <div className="email-loading">

                Loading Inbox...

            </div>

        );

    }




    return (

        <div className="gmail-container">


            {/* Sidebar */}

            <aside className="gmail-sidebar">


                <button className="compose">

                    + Compose

                </button>



                <div className="menu active">

                    <FaInbox />

                    Inbox

                    <span>
                        {emails.length}
                    </span>

                </div>



                <div className="menu">

                    <FaStar />

                    Starred

                </div>



                <div className="menu">

                    <FaPaperPlane />

                    Sent

                </div>



                <div className="menu">

                    <FaTrash />

                    Trash

                </div>


            </aside>





            {/* Main Inbox */}


            <main className="gmail-main">


                {/* Header */}

                <div className="gmail-header">


                    <FaBars />



                    <h2>

                        <FaEnvelope />

                        Inbox

                    </h2>



                    <div className="search-box">


                        <FaSearch />


                        <input

                            value={search}

                            onChange={handleSearch}

                            placeholder="Search mail"

                        />


                    </div>


                </div>






                {/* Email List */}


                <div className="gmail-list">



                    {
                        filteredEmails.length === 0 ?

                        (

                            <div className="empty">

                                No emails found

                            </div>

                        )

                        :

                        filteredEmails.map((email)=>(


                            <div className={`gmail-row ${
                                    email.isRead ? "" : "unread"
                                }`}
                                key={email.id}

                                onClick={() =>
                                    navigate(`/emails/${email.id}`)
                                }

                                >



                                <div className="sender">


                                    {
                                        email.isStarred &&

                                        <FaStar
                                            className="star"
                                        />

                                    }


                                    <strong>

                                        {email.name}

                                    </strong>


                                </div>




                                <div className="subject">


                                    <strong>

                                        {email.subject}

                                    </strong>


                                    <span>

                                        {" - "}

                                        {
                                            email.message
                                                ?.substring(
                                                    0,
                                                    80
                                                )
                                        }

                                    </span>


                                </div>





                                <div className="date">


                                    {
                                        new Date(
                                            email.createdAt
                                        )
                                        .toLocaleDateString()
                                    }



                                    <button

                                        onClick={() =>
                                            handleDelete(
                                                email.id
                                            )
                                        }

                                    >

                                        <FaTrash />

                                    </button>


                                </div>



                            </div>


                        ))

                    }



                </div>



            </main>


        </div>

    );

};


export default EmailDashboard;