import { validationResult } from "express-validator";

// this is validation middleware for use ever route post , put
const validate = async (req , res , next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            success:false,
            msg: "Validation error is occured",
            errors: errors.array()
        })
    }
    else{
        next();
    }
}

export {validate};

