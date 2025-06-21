import express from "express"

//controller imports
import { getResources, addResource, updateResource, deleteResource, visitResource, mostVisited } from "../controller/resources.controller.js";

const resourceRouter = express.Router()


resourceRouter.route("/")
    .get(getResources)
    .post(addResource);

resourceRouter.route("/:resource_id")
    .patch(updateResource)
    .delete(deleteResource)

resourceRouter.put("/visited/:resource_id", visitResource);
resourceRouter.get("/mostvisited",mostVisited);

export default resourceRouter;