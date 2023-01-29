import UserModel from "../Models/User.js";
import bcrycpt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const CREATE_ACCOUNT = async (req, res, next) => {
    try {
        let encryptedPassword = "";
        bcrycpt.hash(req.body.password, 10, function (err, hashedPass) {
            if (err) {
                res.json({ error: err })
            }
            encryptedPassword=hashedPass;
        });
        console.log(a);
        let user = new UserModel({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: encryptedPassword
        });
        await user.save();
        res.json({
            message: "User Added Sucessfully"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message:"Errors"
        })
    }
}

