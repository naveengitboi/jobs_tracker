import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({

    resource_name: {
        type:String,
        required:[true, "Name Required"]
    },
    resource_url: {
        type:String,
        required:[true, "Without link it is shit!"]
    },
    times_visited: {
        type:Number,
        default: 0
    },
    tags: [String],
})

const resourceSchema = new mongoose.Schema({
    resource_category : {
        type:String,
        required:true
    },
    urls: [urlSchema],
    
},{timestamps:true})

const resourceModel = new mongoose.model("Resources", resourceSchema);

export default resourceModel;