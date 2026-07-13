import fs from "fs";
import path from "path";


/*
|--------------------------------------------------------------------------
| Create Directory If Not Exists
|--------------------------------------------------------------------------
*/

export const ensureDirectoryExists = (dirPath) => {

    if (!fs.existsSync(dirPath)) {

        fs.mkdirSync(dirPath, {
            recursive: true,
        });

    }

};



/*
|--------------------------------------------------------------------------
| Create JSON File If Not Exists
|--------------------------------------------------------------------------
*/

export const ensureFileExists = (filePath) => {


    if (!fs.existsSync(filePath)) {


        ensureDirectoryExists(
            path.dirname(filePath)
        );


        fs.writeFileSync(
            filePath,
            JSON.stringify([], null, 4),
            "utf8"
        );

    }

};




/*
|--------------------------------------------------------------------------
| Read JSON File
|--------------------------------------------------------------------------
*/

export const readJsonFile = (filePath) => {


    ensureFileExists(filePath);


    try {


        const data =
            fs.readFileSync(
                filePath,
                "utf8"
            );



        if (!data.trim()) {

            return [];

        }



        return JSON.parse(data);



    } catch (error) {


        console.error(
            "JSON Read Error:",
            error.message
        );


        return [];

    }

};




/*
|--------------------------------------------------------------------------
| Write JSON File
|--------------------------------------------------------------------------
*/

export const writeJsonFile = (
    filePath,
    data
) => {


    ensureFileExists(filePath);



    fs.writeFileSync(

        filePath,

        JSON.stringify(
            data,
            null,
            4
        ),

        "utf8"

    );

};