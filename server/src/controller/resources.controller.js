import resourceModel from "../models/resources.model.js";
import templateModel from "../models/template.model.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { respondAsJson } from "../utils/helper.js";


const getResources = asyncErrorHandler(async (req,res, next) => {
    const resourcesList = await resourceModel.find(req.query).sort({resource_name:1});
    respondAsJson({res, output: resourcesList});
})


const addResource = asyncErrorHandler(async (req, res, next) => {
    const resourceData = req.body;
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



export {getResources, addResource, updateResource, deleteResource};