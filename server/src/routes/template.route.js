import express from "express"



//controller imports
import { getTemplates, addTemplate, deleteTemplate, getIndividualTemplate , updateTemplate} from "../controller/template.controller.js";

const templateRouter = express.Router()


templateRouter.route("/")
    .get(getTemplates)
    .post(addTemplate);



templateRouter.route("/:template_id")
    .get(getIndividualTemplate)
    .patch(updateTemplate)
    .delete(deleteTemplate)



export default templateRouter 