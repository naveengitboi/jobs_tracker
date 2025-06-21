import { respondAsJson } from "../utils/helper.js";

export const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 499;
    respondAsJson({res, statusCode:err.statusCode, success:false, output:err.message})
}
