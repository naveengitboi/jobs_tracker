import mongoose from "mongoose";
import { getFullDate } from "../utils/helper.js";

const templateSchema = new mongoose.Schema({
    template_id: {
        type:Number,
        default: 1 
    },

    title: {
        require:true,
        type: String,
    },
    type: {
        require:true,
        type: String,
        enum: ["cover", "resume", "other"],
    }, 
    content:{
        require:true,
        type: String,
    },
    updated:{
        type:Date,
        default: Date.now
    },
    role: {
        type:String,
        require:true
    },


})


templateSchema.methods.get_date = function(){
    this.formatted_date = getFullDate(this.updated);
    return getFullDate(this.updated);
}


const templateModel = new mongoose.model("Template", templateSchema);


export default templateModel;