import express from "express"

//controller imports
import { getResources, addResource, updateResource, deleteResource } from "../controller/resources.controller.js";

const resourceRouter = express.Router()

resourceRouter.route("/")
    .get(getResources)
    .post(addResource);

resourceRouter.route("/:resource_id")
    .patch(updateResource)
    .delete(deleteResource)


export default resourceRouter;