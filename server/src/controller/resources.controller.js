import resourceModel from "../models/resources.model.js";
import templateModel from "../models/template.model.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { respondAsJson } from "../utils/helper.js";



const getResources = asyncErrorHandler(async (req,res, next) => {
    const {resource_category_id} = req.params;
    const resourcesList = await resourceModel.findById(resource_category_id).sort({resource_name:1});
    respondAsJson({res, output: resourcesList});
})


//rename category

const renameResourceCategory = asyncErrorHandler(async (req, res, next) => {
    const {resource_category_id} = req.params;
    const {updated_resource_category} = req.body;
    const updatedResource = await resourceModel.findOneAndDelete({_id: resource_category_id}, {resource_category: updated_resource_category}, {new:true});
    respondAsJson({res, output:updateResource});
})


const deleteAll = asyncErrorHandler(async (req, res, next) => {
    const isDeleted = await resourceModel.deleteMany({}, {new:true});
    respondAsJson({res, output:isDeleted});
})




//adding urls

const addNewUrlExisitingResource = asyncErrorHandler(async (req, res, next)=>{
    const {resource_category_id} = req.params;
    const {resource_name, resource_url, tags} = req.body;
    const updatedResource = await resourceModel.findOneAndUpdate({_id: resource_category_id}, {
        $push : {
            urls: {resource_name, resource_url, tags}
        }
    }, {new:true, runValidators:true});
    respondAsJson({res, output:updatedResource});
    
})

//delete urls
const deleteExisitingResourceURL = asyncErrorHandler(async (req, res, next) => {
    const {resource_category_id, url_id} = req.params;
    const deleteResource = await resourceModel.findOneAndDelete({_id:resource_category_id, "urls._id":url_id});
})

//most visited sites

const visitResource = asyncErrorHandler(async (req, res, next) => {
    const {resource_category_id, url_id} = req.params;
    const updatedVisitCount = await resourceModel.findOneAndUpdate({_id:resource_category_id, "urls._id":url_id}, {$inc: {"urls.$.times_visited":1}}, {new:true});
    respondAsJson({res, output:updatedVisitCount});
})


const mostVisited = asyncErrorHandler(async (req, res, next) => {
    let n = 3;
    const topNvisited = await resourceModel.aggregate([
        {
            $unwind:"$urls"
        },
        {
            $sort:{"urls.times_visited":-1, "urls.resource_name":1}
        },
        {
            $limit: n
        },
        {
            _id: 0, // Exclude the root document ID
            "urls.resource_name": 1,
            "urls.resource_url": 1,
            "urls.times_visited": 1,
            "resource_category": 1,
        }
    ])
    respondAsJson({res, output:topNvisited});

})

export {getResources, deleteExisitingResourceURL, visitResource, mostVisited, deleteAll, addNewUrlExisitingResource, renameResourceCategory};