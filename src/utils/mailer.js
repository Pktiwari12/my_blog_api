import dotenv from "dotenv";
dotenv.config();
console.log("Environment variaable is loaded in utils/mailer.js"+"Which is not good thing to import this file");
import nodemailer from "nodemailer";
// console.log(process.env.SMTP_MAIL);

// First of all , transport is created.
const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD

    }
});

const sendEmail = async ({email , subject , content, verifyCode}) =>{
    try{
        // defining object of mail option 
        console.log(verifyCode);
        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: subject,
            html:`
                    <div>
                        <h3>Use this below code to ${content}</h3>
                        <p><strong>Code : </strong> ${verifyCode}</p>
                    </div>
                `
        };
        // then the passing the object of message into the transporter
        await transport.sendMail(mailOptions , (error , info) =>{
            if(error){
                console.log("error");
                throw error;
            }
            else{
                console.log("Message Sent",info.id);
            }
        })

    }catch(error){
        console.log(error);
    }
}

export {sendEmail};



// Note : - here we follow the two Step 
// 1. creating the transport and strore it transport variable
// 2. defining the anonymous function to send mail.