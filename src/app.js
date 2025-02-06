import dotenv from "dotenv";
// Loading the environment variable
dotenv.config();
console.log("Environment varibale is loaded.");
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import  connectDB  from "./init/db.js";
import route from "./routes/post_route.js"
import { userRouter } from "./routes/user_route.js";
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
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));  
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/post",route);
app.use("/api/user",userRouter);
// app.use("./api/post",route);
export default app;


