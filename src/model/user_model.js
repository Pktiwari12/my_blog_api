import mongoose, { trusted }  from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        // 1- super-admin , 2- normal-admin , 3- normal user
        type: Number,
        default: 3
        
    },
    profileImage: {
        type: String,
        required: true
    }

});

const userModel = mongoose.model("User", userSchema);
export default userModel;


// next
1. // To add more features of user like isverified. and explore more key: value pairs for better user. 