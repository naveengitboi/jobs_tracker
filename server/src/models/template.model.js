import mongoose from "mongoose";
import { getFullDate } from "../utils/helper.js";

const templateSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }, 
    title: {
        required: [true, "Title is requiredd"],
        type: String,
    },
    type: {
        required: [true, "Choose from the dropdown"],
        type: String, 
        enum: {
            values:["cover", "resume", "other"],
            message: props => `${props.value} is not supported type, please choose other`
        },
    },
    template: {
        required: [true, "Template is requiredd"],
        type: String,
        validate: {
            validator: function(val){
                return (val).trim.length >= 3
            }, 
            message: "Please add more content"
        }
    },
    role: {
        type: String,
        required: true
    }},
    {
        timestamps: true
    })



const templateModel = new mongoose.model("Template", templateSchema);


export default templateModel;