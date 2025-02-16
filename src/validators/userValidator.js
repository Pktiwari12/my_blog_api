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
        const file = req.files.profileImage[0];
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||   file.mimetype === "image/jpg"){
            return true;
        }
        else{
            return false;
        }
    })
    .withMessage("Please upload image jpeg or png format")

];

const emailValidtor = [
    check('email')
    .isEmail().withMessage("Please Enter your vaild email")
    .notEmpty().withMessage("Email is required.")
];

const verifyUserValidator = [
    check('email')
    .isEmail().withMessage("Please Enter vaild email")
    .notEmpty().withMessage("Email id is required."),

    check('verificationCode')
    .notEmpty().withMessage("Please Enter verification code.")

]

const recoverPasswordValidator = [
    check('email')
    .isEmail().withMessage("Please Enter vaild email.")
    .notEmpty().withMessage("Email is required."),

    check('forgotCode')
    .notEmpty().withMessage("Please Enter the code which has been shared your mail."),

    check('newPassword')
    .notEmpty().withMessage("Please enter new password.")
    .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1

    }).withMessage("Please Enter strong password"),

    check('confirmPassword')
    .notEmpty().withMessage("Please enter confirm password.")
    .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }).withMessage("Please Enter strong password")
]
export {signUpValidator, emailValidtor, verifyUserValidator, recoverPasswordValidator};