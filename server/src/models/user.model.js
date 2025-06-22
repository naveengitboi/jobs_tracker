import mongoose, { mongo } from "mongoose";

// user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required"],
        unique: [true, "Username should be unique"],
        match: [/^[a-z0-9_.]{5,10}+$/, "Invalid Username Format"]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Please enter a valid email address."],
    },
    profile_picture: {
        type: String,
        default: null, // URL for the user's profile picture
    },
    phone_number: {
        type: String,
        match: [/^\d{10}$/, "Invalid phone number format"],
    }, 
    password: {
        type:String,
        
    }
}, {timestamps:true})


const userModel = new mongoose("User", userSchema);


export default userModel