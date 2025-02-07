import User from "./../model/user_model.js";
import bcrypt from "bcrypt";
import {validationResult} from "express-validator";
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
    const hashedPassword = await bcrypt.hash(password , 10);
    const file = req.files.profileImage[0];
    const newUser = new User({name , email , password: hashedPassword, profileImage: "./../public/image/"+file.filename}, role);
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