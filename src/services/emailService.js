const API_URL = "http://localhost:5000/api/email";



/*
|--------------------------------------------------------------------------
| Send Contact Email
| POST /api/email/send
|--------------------------------------------------------------------------
*/

export const sendEmail = async (emailData) => {


    const response =
        await fetch(

            `${API_URL}/send`,

            {
                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                },

                body: JSON.stringify(emailData),

            }

        );



    if (!response.ok) {


        throw new Error(
            "Failed to send email"
        );


    }



    return await response.json();


};







/*
|--------------------------------------------------------------------------
| Get All Emails
| GET /api/email
|--------------------------------------------------------------------------
*/

export const getEmails = async () => {


    const response =
        await fetch(
            API_URL
        );



    if (!response.ok) {


        throw new Error(
            "Failed to fetch emails"
        );


    }



    return await response.json();


};







/*
|--------------------------------------------------------------------------
| Get Email By ID
| GET /api/email/:id
|--------------------------------------------------------------------------
*/

export const getEmailById = async (id) => {


    const response =
        await fetch(

            `${API_URL}/${id}`

        );



    if (!response.ok) {


        throw new Error(
            "Email not found"
        );


    }



    return await response.json();


};








/*
|--------------------------------------------------------------------------
| Mark Email As Read
| PUT /api/email/:id/read
|--------------------------------------------------------------------------
*/

export const markEmailRead = async (id) => {


    const response =
        await fetch(

            `${API_URL}/${id}/read`,

            {
                method:"PUT",
            }

        );



    if (!response.ok) {


        throw new Error(
            "Unable to update email"
        );


    }



    return await response.json();


};








/*
|--------------------------------------------------------------------------
| Star / Unstar Email
| PUT /api/email/:id/star
|--------------------------------------------------------------------------
*/

export const toggleStarEmail = async (id) => {


    const response =
        await fetch(

            `${API_URL}/${id}/star`,

            {
                method:"PUT",
            }

        );



    if (!response.ok) {


        throw new Error(
            "Unable to update star"
        );


    }



    return await response.json();


};








/*
|--------------------------------------------------------------------------
| Delete Email
| DELETE /api/email/:id
|--------------------------------------------------------------------------
*/

export const deleteEmail = async (id) => {


    const response =
        await fetch(

            `${API_URL}/${id}`,

            {
                method:"DELETE",
            }

        );



    if (!response.ok) {


        throw new Error(
            "Unable to delete email"
        );


    }



    return await response.json();


};