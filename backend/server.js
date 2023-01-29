import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import AuthRouter from "./Routes/Auth.js";
import bodyParser from "body-parser";
import cors from 'cors'
// Get Environment Data
dotenv.config();
// Connect To Data Base
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
});
// Connect To Middleware
const app = express();
const options = {
    origin: 'http://localhost:3000',
}
app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
const PORT = process.env.PORT || 5000;
app.use('/api/employee', AuthRouter)

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`)
})

