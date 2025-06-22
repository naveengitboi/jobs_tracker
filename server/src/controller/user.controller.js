import bcrypt from "bcrypt"
import userModel from "../models/user.model.js"
import asyncErrorHandler from "../utils/asyncErrorHandler.js"
import { respondAsJson } from "../utils/helper.js";
import { generateToken } from "../middlewares/auth.js";



const registerUser = asyncErrorHandler(async (req, res, next) => {
    const userData = req.body;
    const isUserExist = await userModel.findOne({email: userData.email});
    if(isUserExist){
        respondAsJson({res, statusCode:400, success:false,output: "User Already Exist"})
        return;
    }
    const salt = 10;
    const hashedPwd = await bcrypt.hash(userData.password, salt);

    userData.password = hashedPwd;

    const newUser = await userModel.create(userData);

    if(newUser){
        generateToken(res, {user_id: newUser._id});
        respondAsJson({res, output: newUser});
    }else{
        respondAsJson({res,statusCode:400, success:false, output:"Somethings mishappend"})
    }
})



export {registerUser};