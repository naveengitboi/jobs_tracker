import nodemailer from "nodemailer"
import path from "path"
import { loadTemplate } from "../middlewares/fileReader.js"
import { getOtp } from "../utils/helper.js"

const transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    secure:true,
    port:465,
    auth:{
        user:process.env.USER_MAIL,
        pass:process.env.USER_PASS
    }
})



async function sendMail({to, sub,filePath, reps}){
    const template = loadTemplate(filePath, reps);
    const mailInfo = await transporter.sendMail({
        from: `Job Tracker <${process.env.USER_MAIL}>`,
        to:to,
        subject:sub,
        html:template
    })
    console.log("Email Sent", mailInfo);
}


export {sendMail};