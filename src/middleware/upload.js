import exp from "constants";
import multer from "multer";
// importing some native module to access direcotry
import path from "path";
import {dirname} from "path"
import {fileURLToPath} from "url";

// accessing the filename 
const __filename = fileURLToPath(import.meta.url);
const __diraname = dirname(__filename);


// console.log(`The file name ${__filename}`);
// console.log(`The direcotry =  \t ${__diraname}`);


// storage configuration like where the uploadedfile is stored and what filename is 
const storage = multer.diskStorage({
    // two obect destination and filename
    destination: (req ,file , cb) =>{
        cb(null , path.join(__diraname, "./../public/image"));
    }, 
    filename: (req , file , cb) =>{
        const fname = Date.now() + "-"+file.originalname;
        cb(null , fname);
    }
});

// file filter 
const fileFilter = (req , file ,cb) =>{
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
    if(allowedMimeTypes.includes(file.mimetype)){
        cb(null , true);
    }else{
        // cb(null, false);
        cb(new Error("Only jpeg , jpg or png format ara allowed !", false));
    }
}

// instance of multer and export 
const picUpload = multer({
    storage: storage,
    fileFilter: fileFilter,

}).fields(
    [{name: "profileImage", maxCount: 1}]
);
export default picUpload;



// next 
 // 1. handling error of this file and to give response.
 // 2. to ensure the file type and file number