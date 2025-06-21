import express from "express" 
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import  { MongoClient, ServerApiVersion } from 'mongodb';


//files imports
import templateRouter from "./src/routes/template.route.js"
import { generateToken, verifyToken } from "./src/middlewares/auth.js";
import { ErrorHandler } from "./src/utils/ErrorHandler.js"
import { errorHandler } from "./src/middlewares/globalErrorHandler.js"

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
app.use(cookieParser("job_trakcer_app"))
app.use(errorHandler)

console.log(process.env.MONGO_URL);

const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to DB");

}

app.get('/', (req, res) => {
  generateToken(res, {id:"123"});
  res.send('Hello, Express!');
});

app.use("/api/templates", templateRouter)

app.all("/{*any}", (req,res, next) => {
  const err = new ErrorHandler(404,"Where you went bro?");
  next(err);
})


app.listen(process.env.PORT,() => {
    console.log("Connected")
    dbConnect();
})