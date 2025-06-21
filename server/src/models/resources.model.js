import mongoose from "mongoose";


const resourceSchema = new mongoose.Schema({
    resource_name: {
        type:String,
        required:[true, "Name Required"]
    },
    resource_url: {
        type:String,
        required:[true, "Without link it is shit!"]
    },
    category : {
        type:String,
        enum: ["job", "tools"],
        required:true
    },
    tags: [String]
},{timestamps:true})



const resourceModel = new mongoose.model("Resources", resourceSchema);

export default resourceModel;