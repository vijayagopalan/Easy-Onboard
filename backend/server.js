import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import AuthRouter from "./Routes/Auth";
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
const PORT = process.env.PORT || 5000;
app.use('/api/employee',AuthRouter)

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`)
})

