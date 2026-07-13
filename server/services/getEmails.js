import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import {
    readJsonFile,
    writeJsonFile,
} from "../utils/fileHelper.js";


// Get current directory in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Storage path
const STORAGE_PATH =
    process.env.STORAGE_PATH ||
    path.join(__dirname, "../storage");



/*
|--------------------------------------------------------------------------
| Get All Emails
|--------------------------------------------------------------------------
*/

export const getAllEmails = () => {

    const sentFolder = path.join(
        STORAGE_PATH,
        "sent"
    );


    if (!fs.existsSync(sentFolder)) {

        return [];

    }


    let emails = [];


    const years = fs.readdirSync(sentFolder);


    years.forEach((year) => {


        const yearFolder = path.join(
            sentFolder,
            year
        );


        if (
            !fs.statSync(yearFolder).isDirectory()
        ) {
            return;
        }


        const months = fs.readdirSync(
            yearFolder
        );


        months.forEach((monthFile) => {


            if (!monthFile.endsWith(".json")) {
                return;
            }


            const filePath = path.join(
                yearFolder,
                monthFile
            );


            const data = readJsonFile(filePath);


            emails.push(...data);


        });


    });



    // Latest email first
    emails.sort(
        (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
    );


    return emails;

};




/*
|--------------------------------------------------------------------------
| Get Email By ID
|--------------------------------------------------------------------------
*/

export const getEmailById = (id) => {

    const emails = getAllEmails();


    return (
        emails.find(
            (mail) => mail.id === id
        ) || null
    );

};




/*
|--------------------------------------------------------------------------
| Search Emails
|--------------------------------------------------------------------------
*/

export const searchEmails = (keyword) => {


    const value =
        keyword.toLowerCase();



    return getAllEmails().filter((mail) => {


        const name =
            (mail.name || "")
            .toLowerCase();


        const email =
            (mail.from || "")
            .toLowerCase();


        const subject =
            (mail.subject || "")
            .toLowerCase();


        const message =
            (mail.message || "")
            .toLowerCase();



        return (
            name.includes(value) ||
            email.includes(value) ||
            subject.includes(value) ||
            message.includes(value)
        );


    });

};




/*
|--------------------------------------------------------------------------
| Delete Email
|--------------------------------------------------------------------------
*/

export const deleteEmail = (id) => {


    const sentFolder = path.join(
        STORAGE_PATH,
        "sent"
    );


    if (!fs.existsSync(sentFolder)) {

        return false;

    }



    const years =
        fs.readdirSync(sentFolder);



    for (const year of years) {


        const yearFolder =
            path.join(
                sentFolder,
                year
            );



        if (
            !fs.statSync(yearFolder)
            .isDirectory()
        ) {
            continue;
        }



        const months =
            fs.readdirSync(yearFolder);



        for (const monthFile of months) {


            const filePath =
                path.join(
                    yearFolder,
                    monthFile
                );



            let emails =
                readJsonFile(filePath);



            const index =
                emails.findIndex(
                    (mail) =>
                        mail.id === id
                );



            if (index !== -1) {


                emails.splice(
                    index,
                    1
                );


                writeJsonFile(
                    filePath,
                    emails
                );


                return true;

            }

        }

    }


    return false;

};