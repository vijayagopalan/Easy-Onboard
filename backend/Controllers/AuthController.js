import UserModel from "../Models/User";
import bcrycpt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const CREATE_ACCOUNT = async (req, res, next) => {
    bcrycpt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({ error: err })
        }
    });
    let user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    });
    try {
        await user.save();
        res.json({
            message: "User Added Sucessfully"
        });
    }
    catch (e) {
        console.log(e);
    }
}

