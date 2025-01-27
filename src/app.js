import dotenv from "dotenv";
// Loading the environment variable
dotenv.config();
console.log("Environment varibale is loaded.");
import express from "express";
import bodyParser from "body-parser";
import  connectDB  from "./init/db.js";
import route from "./routes/post_route.js"
// try{
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("Database is connected ");
// }catch(error){
//     console.log("database-connection is failed"+error.message);
// }
connectDB().then(()=>{
    console.log("db is conneced.");
})
const app = express();
app.use(bodyParser.json());
app.use("/api/post",route);
export default app;


