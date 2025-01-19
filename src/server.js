import app from "./app.js";
import dotenv from "dotenv";
// Loading the environment variable
dotenv.config();
console.log("Environment varibale is loaded.");
console.log(process.env.PORT);
const port = process.env.PORT;
app.listen(port , ()=>{
    console.log(`The server is listening on port ${port}`);
})

