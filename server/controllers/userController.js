const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
require('dotenv').config();

//@desc Register
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    const {username,email, password} = req.body;
    console.log(req.body);
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required dafasffg");
    }
    const userAvail = await User.findOne({email});
    if(userAvail){
        res.status(400);
        throw new Error("User already exists");
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPass
    })
    if(user){
        res.status(201).json({message : "User created successfully",username: user.username, email: user.email})
    }
    else{
        res.status(400);
        throw new Error("Invalid user data");
    }
        res.json({ message: "User created successfully"})
    }
);

//@desc Login
//@route POST /api/user/login
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    console.log(req.body);
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToekn = Jwt.sign({
            user:{
                username: user.username,
                email:user.email,
                id : user._id
            }
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30d'})
        res.status(200).json({accessToekn});
    }
    else{
        res.status(401);
        throw new Error("email or password is not valid")    }
    
});

//@desc Register
//@route GET /api/user/currentUser
//@access Private
const currentUser = asyncHandler(async(req, res) => {
    res.json( req.user );
});
module.exports = { registerUser, loginUser, currentUser }; 