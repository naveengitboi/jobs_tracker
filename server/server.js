import express from "express" 
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import  { MongoClient, ServerApiVersion } from 'mongodb';

//files imports
import templateRouter from "./src/routes/template.route.js"

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())


console.log(process.env.MONGO_URL);

const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to DB");

}

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use("/api/templates", templateRouter)


app.listen(process.env.PORT,() => {
    console.log("Connected")
    dbConnect();
})