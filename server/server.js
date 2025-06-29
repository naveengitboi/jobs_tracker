import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"


//files imports
import templateRouter from "./src/routes/template.route.js"
import { generateToken, verifyToken } from "./src/middlewares/auth.js";
import { CustomErrorHandler } from "./src/utils/ErrorHandler.js"
import { errorHandler } from "./src/middlewares/globalErrorHandler.js"
import resourceRouter from "./src/routes/resources.route.js"
import { sendMail } from "./src/controller/emailVerification.js"
import { getOtp } from "./src/utils/helper.js"

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
  generateToken(res, { id: "123" });
  res.send('Hello, Express!');
});
app.get("/mail", (req, res) => {
  const replacements = {
    "otp_code": getOtp(),
    "app_name": "Job Tracker",
    "user_name": "naveen"
  }
  const options = {
    to: "naveenjangiti9@gmail.com",
    sub: "This is test mail ",
    filePath: "./src/templates/verifyOtp.html",
    reps: replacements,
  }
  // sendMail(options);
  res.send("Done mail")
})

app.use("/api/templates", templateRouter)
app.use("/api/resources", resourceRouter)

app.all("/{*any}", (req, res, next) => {
  const err = new CustomErrorHandler(404, "Where you went bro?");
  next(err);
})


app.listen(process.env.PORT, () => {
  console.log("Connected")
  dbConnect();
})