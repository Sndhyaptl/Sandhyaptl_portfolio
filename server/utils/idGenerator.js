import { randomUUID } from "crypto";


/*
|--------------------------------------------------------------------------
| Generate Unique Mail ID
|--------------------------------------------------------------------------
|
| Example:
|
| MAIL-20260712-A1B2C3D4
|
|--------------------------------------------------------------------------
*/


const generateMailId = () => {


    const now = new Date();



    const date =

        now.getFullYear().toString() +

        String(
            now.getMonth() + 1
        ).padStart(2, "0") +

        String(
            now.getDate()
        ).padStart(2, "0");




    const unique =

        randomUUID()
            .split("-")[0]
            .toUpperCase();




    return `MAIL-${date}-${unique}`;

};



export default generateMailId;