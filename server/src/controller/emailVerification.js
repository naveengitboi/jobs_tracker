import nodemailer from "nodemailer"
import path from "path"
import { loadTemplate } from "../middlewares/fileReader.js"
import { getOtp } from "../utils/helper.js"

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    secure:true,
    port:465,
    auth:{
        user:"meghasaikittuau@gmail.com",
        pass:"jbtthkupnekgdsww"
    }
})



async function sendMail({to, sub,filePath, reps}){
    const template = loadTemplate(filePath, reps);
    const mailInfo = await transporter.sendMail({
        from:'"Job Tracker" <meghasaikittuau@gmail.com>',  
        to:to,
        subject:sub,
        html:template
    })
    console.log("Email Sent", mailInfo);
}


export {sendMail};