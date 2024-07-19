import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

export const register = async(req,res,next) => {

    const {username, dob, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, dob, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("User added successfully")
    } catch (error) {
        next(error);
    }
};