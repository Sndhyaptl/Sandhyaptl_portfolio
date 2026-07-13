import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import {
    readJsonFile,
    writeJsonFile,
} from "../utils/fileHelper.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const STORAGE_PATH =
    process.env.STORAGE_PATH ||
    path.join(__dirname, "../storage");



/*
|--------------------------------------------------------------------------
| Find Email File
|--------------------------------------------------------------------------
*/

const findEmailFile = (id) => {


    const sentPath =
        path.join(
            STORAGE_PATH,
            "sent"
        );


    if (!fs.existsSync(sentPath)) {

        return null;

    }



    const years =
        fs.readdirSync(sentPath);



    for (const year of years) {


        const yearPath =
            path.join(
                sentPath,
                year
            );



        const files =
            fs.readdirSync(yearPath);



        for (const file of files) {


            const filePath =
                path.join(
                    yearPath,
                    file
                );


            const emails =
                readJsonFile(filePath);



            const exists =
                emails.some(
                    email =>
                        email.id === id
                );



            if (exists) {

                return filePath;

            }

        }

    }


    return null;

};




/*
|--------------------------------------------------------------------------
| Update Email
|--------------------------------------------------------------------------
*/

const updateEmail = (
    id,
    updates
) => {


    const filePath =
        findEmailFile(id);



    if (!filePath) {

        return null;

    }



    const emails =
        readJsonFile(filePath);



    const index =
        emails.findIndex(
            email =>
                email.id === id
        );



    if (index === -1) {

        return null;

    }



    emails[index] = {

        ...emails[index],

        ...updates,

        updatedAt:
            new Date()
            .toISOString(),

    };



    writeJsonFile(
        filePath,
        emails
    );



    return emails[index];

};




/*
|--------------------------------------------------------------------------
| Mark Read
|--------------------------------------------------------------------------
*/

export const markAsRead = (id) => {


    return updateEmail(
        id,
        {
            isRead:true
        }
    );

};




/*
|--------------------------------------------------------------------------
| Toggle Star
|--------------------------------------------------------------------------
*/

export const toggleStar = (id) => {


    const email =
        updateEmail(
            id,
            {}
        );



    if (!email) {

        return null;

    }



    return updateEmail(
        id,
        {
            isStarred:
                !email.isStarred
        }
    );

};