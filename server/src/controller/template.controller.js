import templateModel from "../models/template.model.js"
import asyncErrorHander from "../utils/asyncErrorHandler.js"
import { respondAsJson } from "../utils/helper.js";


const getIndividualTemplate = asyncErrorHander(async (req, res, next)=>{
    const {template_id} = req.params
    const data = await templateModel.findOne({_id:template_id}); 
    if(data){
        respondAsJson({res, output:data});
    }else{
        respondAsJson({res,statusCode:400,success:false, output:"Invalid Template Id"});
    }
})

const getTemplates = asyncErrorHander(async (req, res, next) => {
    const data = await templateModel.find(req.query).sort({updatedAt:-1});
    // console.log(data);
    res.status(200).json({ success: true, output: data}); 
})

const addTemplate = asyncErrorHander(async (req, res, next) => {
    const data = req.body; 
    const newTemplate = await templateModel.create(data);
    respondAsJson({res, output:"Template Added"})
})

const deleteTemplate = asyncErrorHander(async (req, res, next) => {

    const {template_id} = req.params;
    const suc = await templateModel.findOneAndDelete({_id: template_id})

    respondAsJson({res, output:suc})
})


const updateTemplate = asyncErrorHander(async (req, res, next) => {
    const {template_id} = req.params;
    const contentToUpdate = req.body;
    console.log("content ", contentToUpdate);
    const updated = await templateModel.findOneAndUpdate({_id: template_id},contentToUpdate, {new:true, runValidators:true});
    respondAsJson({res, output:updated})
})


export {getTemplates, addTemplate, deleteTemplate, getIndividualTemplate, updateTemplate}
