import mongoose, { mongo } from "mongoose";


//basic info
const basicInfoSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        default: "",
        trim: true,
    },
    desired_role: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    about: {
        type: String,
        trim: true,
    }
})

const basicInfoSectionSchema = new mongoose.Schema({
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    basic_info: [basicInfoSchema]
}, {timestamps:true});





// education schmea

const educationSchema = new mongoose.Schema({
    type: {
        type: String, // Example: "Graduation"
        required: true,
        trim: true,
    },
    university: {
        type: String,
        required: true,
        trim: true,
    },
    course: {
        type: String,
        required: true,
        trim: true,
    },
    degree: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        default: null, // Can be null if still studying
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
});


const educationSectionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    educations: [educationSchema]
}, {timestamps:true})


// skills schema
const skillSchema = new mongoose.Schema({
    skill_name: {
        type: String
    }
})

const skillSectionSchema = new mongoose.Schema({
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }, 
    skills: [skillSchema]
})


//connections

const professionalConnectionSchema = new mongoose.Schema({
    site_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    site_link: {
        type: String,
        required: true,
        match: [/^(http|https):\/\/[^ "]+$/, "Invalid URL format"],
    },
});

const professionalSectionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    professionalConnections: [professionalConnectionSchema]
})


educationModel = new mongoose.model("Education", educationSectionSchema);
const skillsModel = new mongoose.model("Skills", skillSectionSchema);
const pConnectionsModel = new mongoose.model("PConnections", professionalSectionSchema);


export {educationModel, skillsModel, pConnectionsModel};