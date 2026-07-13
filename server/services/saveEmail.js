import path from "path";
import { fileURLToPath } from "url";

import {
    ensureDirectoryExists,
    readJsonFile,
    writeJsonFile,
} from "../utils/fileHelper.js";

import generateMailId from "../utils/idGenerator.js";


// ES Module __dirname support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Storage location
const STORAGE_PATH =
    process.env.STORAGE_PATH ||
    path.join(__dirname, "../storage");



/*
|--------------------------------------------------------------------------
| Save Email
|--------------------------------------------------------------------------
|
| Storage:
|
| storage/
|   sent/
|     2026/
|       07.json
|
|--------------------------------------------------------------------------
*/

const saveEmail = (emailData) => {


    const now = new Date();


    const year =
        now.getFullYear().toString();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");



    // Create year folder

    const yearFolder = path.join(
        STORAGE_PATH,
        "sent",
        year
    );


    ensureDirectoryExists(
        yearFolder
    );



    // Monthly JSON file

    const filePath = path.join(
        yearFolder,
        `${month}.json`
    );



    // Existing emails

    const emails =
        readJsonFile(filePath);



    // Email object

    const email = {


        id: generateMailId(),


        from:
            emailData.email,


        to:
            process.env.MAIL_FROM_EMAIL,


        name:
            emailData.name,


        subject:
            emailData.subject,


        message:
            emailData.message,


        status:
            "Sent",


        isRead:
            false,


        isStarred:
            false,


        labels:
            [],


        attachments:
            [],


        createdAt:
            now.toISOString(),


        updatedAt:
            now.toISOString(),


        smtpMessageId:
            emailData.smtpMessageId || null,

    };



    // Latest email first

    emails.unshift(email);



    // Save JSON

    writeJsonFile(
        filePath,
        emails
    );



    return email;

};



export default saveEmail;