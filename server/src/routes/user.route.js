import express from "express"


//functions imports
import { registerUser } from "../controller/user.controller.js";




const userRoute = express.Router();

userRoute.route("/register")
    .post(registerUser)


userRoute.route("/register/email_verification/")
    .post()
