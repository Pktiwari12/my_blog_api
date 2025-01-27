import mongoose from "mongoose";
 const connectDB = async () =>{
    try{
        // console.log("db-string"+process.env.MONGODB_URL)
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is connected ");
    }catch(error){
        console.log("database-connection is failed"+error.message);
    }
};

export default connectDB;