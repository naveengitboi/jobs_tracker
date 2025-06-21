import resourceModel from "../models/resources.model.js";
import templateModel from "../models/template.model.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { respondAsJson } from "../utils/helper.js";



const getResources = asyncErrorHandler(async (req,res, next) => {
    const resourcesList = await resourceModel.find(req.query).sort({resource_name:1});
    respondAsJson({res, output: resourcesList});
})


const addResource = asyncErrorHandler(async (req, res, next) => {
    const {resource_category} = req.query;
    const resourceData = req.body;
    const data = await resourceModel.find(req.query);
    
    const createResource = await resourceModel.create(resourceData);
    respondAsJson({res, output:"Added resource"})
})


const updateResource = asyncErrorHandler(async (req, res, next) => {
    const {resource_id} = req.params;
    const newResourceData = req.body;
    const updateResource = await resourceModel.findOneAndUpdate({_id: resource_id}, newResourceData, {new:true, runValidators:true});
    respondAsJson({res, output:updateResource});
})

const deleteResource = asyncErrorHandler(async (req, res, next) => {
    const {resource_id} = req.params;
    console.log(resource_id);
    const isDeleted = await resourceModel.findOneAndDelete({_id: resource_id}, {new:true});
    respondAsJson({res, output:isDeleted});
})



//most visited sites

const visitResource = asyncErrorHandler(async (req, res, next) => {
    const {resource_id} = req.params;
    const updatedResource = await resourceModel.findOneAndUpdate({_id:resource_id}, {$inc: {"times_visited":1}}, {new:true});
    respondAsJson({res, output:updatedResource});
})


const mostVisited = asyncErrorHandler(async (req, res, next) => {
    let n = 3;
    const topNvisited = await resourceModel.find().sort({times_visited:-1}).limit(n);
    respondAsJson({res, output:topNvisited});

})


export {getResources, addResource, updateResource, deleteResource, visitResource, mostVisited};