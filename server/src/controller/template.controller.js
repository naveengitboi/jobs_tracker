import templateModel from "../models/template.model.js"


const getLastAddedTemplate = async () => {
    const data = await templateModel.find().sort({"template_id": -1}).limit(1);
    console.log(data);
    return data.template_id;
}

const getIndividualTemplate = async (req, res)=>{
    const template_id = req.params.template_id
    const data = await templateModel.find({"template_id": template_id}); 
    res.status(200).json({ success: true, output: data}); 
}

const getTemplates = async (req, res) => {
    console.log(req.params)
    console.log(req.query)
    const data = await templateModel.find(req.query);
    console.log(data);
    res.send("Hello Templates")
}

const addTemplate = async (req, res) => {
    console.log(req.body)

    const lastId = getLastAddedTemplate();
    const data = req.body;
    const newTemplate = new templateModel(data);
    const addedTemp = await newTemplate.save();
    res.send("Hello add templates here")
}


const deleteTemplate = async (req, res) => {
    console.log(req.params);
    const template_id = parseInt(req.params.temp_id);
    console.log(template_id);
    const suc = await templateModel.findOneAndDelete({"template_id": template_id})
    console.log(suc);
    res.send("Deleted");
}


export {getTemplates, addTemplate, deleteTemplate, getIndividualTemplate}
