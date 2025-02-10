import User from "./../model/user_model.js";
import bcrypt from "bcrypt";
import {validationResult} from "express-validator";
import { sendEmail } from "../utils/mailer.js";
// anonymous function to create user in database
const register = async (req , res) =>{
    try{

        // validating the request 
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            {
                return res.status(400).json({
                    success: false,
                    msg: "Validation errors is occured",
                    errors: errors.array()
                })
            }
        }

        // If validation is success
        // extracting the values by req.body
        console.log("request body \n"+JSON.stringify(req.body, null , 2));
    const {name, email, password, role } = req.body;
    console.log("The pasword "+ password);
    if(!password){
        return res.status(400).json({
            status: false,
            msg: "password is required",
            password: password
        })
    }
    // checking Whether user exist or not
    const isEmailExist = await User.findOne({email: email});
    if(isEmailExist){
         return res.status(400).json({
                success: false,
                msg: "Email is already exist",
        })
    }
    const hashedPassword = await bcrypt.hash(password , 10);
    const file = req.files.profileImage[0];
    const newUser = new User({name , email , password: hashedPassword, profileImage: "./../public/image/"+file.filename}, role);
    // after the sign up of user , the verifcation link is sended to his mail
    try {
        const mailMessage = '<p>Hi '+newUser.name +'please <a href = "http://localhost:3000/mail-verification/?id='+newUser._id+'">verify</a> your email </p>';
        sendEmail(email, "Email Verification", mailMessage);
    } catch (error) {
        console.log(error);
    }

    const savedUser = await newUser.save();
    

    console.log(`The saved user is ${savedUser}`);  
    res.status(201).json({
        success: true,
        msg: "The user credential is saved into database",
        user: savedUser
    })

    }catch(err){
        res.status(500).json({
            success: false,
            msg: "Internel Server is occured",
            err: err.message
        });
    }
}

export {register};