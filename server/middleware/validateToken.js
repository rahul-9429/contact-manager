const asyncHandler = require('express-async-handler');
const Jwt = require('jsonwebtoken');
require('dotenv').config();

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];
        Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = user.user;
            next();
        });
        if(!token){
            res.status(401);
            throw new Error("User is not authorized");
        }
    }
})

module.exports = validateToken;