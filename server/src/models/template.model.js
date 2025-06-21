import mongoose from "mongoose";
import { getFullDate } from "../utils/helper.js";

const templateSchema = new mongoose.Schema({
    title: {
        require: [true, "Title is required"],
        type: String,
    },
    type: {
        require: [true, "Choose from the dropdown"],
        type: String, 
        enum: {
            values:["cover", "resume", "other"],
            message: props => `${props.value} is not supported type, please choose other`
        },
    },
    template: {
        require: [true, "Template is required"],
        type: String,
        // validate: {
        //     validator: function(val){
        //         return (val).trim.length >= 3
        //     }, 
        //     message: "Please add more content"
        // }
    },
    role: {
        type: String,
        require: true
    }},
    {
        timestamps: true
    })


templateSchema.methods.get_date = function () {
    return getFullDate(this.updatedAt);
}


const templateModel = new mongoose.model("Template", templateSchema);


export default templateModel;