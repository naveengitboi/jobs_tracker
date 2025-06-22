import express from "express"

//controller imports
import { getResources, visitResource, mostVisited, deleteAll, addNewUrlExisitingResource, renameResourceCategory} from "../controller/resources.controller.js";

const resourceRouter = express.Router()


resourceRouter.route("/:resource_category_id")
    .get(getResources)
    .put(renameResourceCategory)

resourceRouter.put("/:resource_category_id/urls/:url_id/visit", visitResource);

resourceRouter.get("/most_visited",mostVisited);


resourceRouter.put("/add_url/:resource_category_id/", addNewUrlExisitingResource);

resourceRouter.put("/rename/:resource_category_id/", renameResourceCategory);


export default resourceRouter;