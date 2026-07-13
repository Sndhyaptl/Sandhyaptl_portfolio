import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    FaArrowLeft,
    FaTrash,
    FaStar,
    FaRegStar,
    FaEnvelopeOpen,
} from "react-icons/fa";

import {
    getEmailById,
    deleteEmail,
} from "../../services/emailService";

import "./EmailDetail.css";

const EmailDetail = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [email, setEmail] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadEmail = async () => {

            try {

                const response =
                    await getEmailById(id);

                setEmail(response.data);

            }
            catch (error) {

                console.error(error);

            }
            finally {

                setLoading(false);

            }

        };

        loadEmail();

    }, [id]);



    const handleDelete = async () => {

        const ok =
            window.confirm(
                "Delete this email?"
            );

        if (!ok) return;

        await deleteEmail(id);

        navigate("/emails");

    };



    if (loading) {

        return (
            <div className="mail-loading">
                Loading...
            </div>
        );

    }

    if (!email) {

        return (
            <div className="mail-loading">
                Email not found
            </div>
        );

    }

    return (

        <div className="mail-page">

            <div className="mail-card">

                <div className="mail-toolbar">

                    <button
                        onClick={() => navigate("/emails")}
                    >
                        <FaArrowLeft />
                    </button>

                    <div>

                        <button>
                            {
                                email.isStarred
                                    ? <FaStar />
                                    : <FaRegStar />
                            }
                        </button>

                        <button
                            onClick={handleDelete}
                        >
                            <FaTrash />
                        </button>

                    </div>

                </div>



                <h1 className="mail-subject">

                    {email.subject}

                </h1>



                <div className="mail-header">

                    <div className="avatar">

                        {email.name.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h3>

                            {email.name}

                        </h3>

                        <p>

                            {email.from}

                        </p>

                    </div>

                    <div className="mail-date">

                        {
                            new Date(
                                email.createdAt
                            ).toLocaleString()
                        }

                    </div>

                </div>



                <div className="mail-body">

                    <FaEnvelopeOpen
                        className="icon"
                    />

                    <p>

                        {email.message}

                    </p>

                </div>

            </div>

        </div>

    );

};

export default EmailDetail;