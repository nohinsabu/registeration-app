import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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

export const signin = async(req,res,next) => { 
    const { username, password } = req.body;
    try {
        const validUser = await User.findOne({username});
        if(!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, 'Invalid Credentials'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const{password: pass, ...rest} = validUser._doc;
        res
        .cookie('access_token', token, {httpOnly: true})
        .status(200)
        .json(rest);
    } catch (error) {
        next(error)
    }
};