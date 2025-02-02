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
const storage = multer.diskStorage({
    // two obect destination and filename
    destination: (req ,file , cb) =>{
        cb(null , path.join(__diraname, "./../public/image"));
    }, 
    filename: (req , file , cb) =>{
        const fname = Date.now + "-"+file.originalname;
        cb(null , fname);
    }
});

const upload = multer({storage: storage});
export default upload;