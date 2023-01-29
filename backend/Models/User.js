import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
}, { timestamps: true })

const UserModel = mongoose.model("User",userSchema);

export default UserModel;