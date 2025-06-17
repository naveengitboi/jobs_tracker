import express from "express"



//controller imports
import { getTemplates, addTemplate, deleteTemplate, getIndividualTemplate } from "../controller/template.controller.js";

const router = express.Router()


router.get("/", getTemplates);


router.get("/:template_id", getIndividualTemplate);

router.post("/add", addTemplate);

router.delete("/delete/:temp_id", deleteTemplate);


export default router