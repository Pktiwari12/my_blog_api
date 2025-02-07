import {check} from "express-validator";

const signUpValidator = [
    check('name', "Please Enter your name.").notEmpty(),
    
    check('email')
    .isEmail()
    .withMessage("Invaild Email")
    .notEmpty()
    .withMessage("Email is required. So please enter email"),
    
    check('password')
    .notEmpty()
    .withMessage("Password is required. So please Enter pasword.")
    .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    .withMessage("Enter strong password."),

    check("profileImage")
    .custom((value, {req} ) =>{
        if(req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png'){
            return true;
        }
        else{
            return false;
        }
    })
    .withMessage("Please upload image jpeg or png format")

]
export {signUpValidator};