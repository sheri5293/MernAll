const jwt = require('jsonwebtoken');
const Register = require('../models/register');

 
const authenticate= async (req,res,next)=>{

    try{

const token = req.cookies.jwttoken;          //get token from cookie
console.log(token)
const verifytoken = jwt.verify(token,process.env.JWT_SECRET); //verify token
const rootUser=await Register.findOne({_id:verifytoken._id, 'tokens.token':token}); // if verfiy then find user with token store in rootuser//
if(!rootUser){
    throw new Error('user not found');}
    req.token=token;          //store token in req.token to get data from token in next middleware//
    req.rootUser=rootUser;    //store user in req.rootUser to get data from user in next middleware//
    req.userID = rootUser._id; // store user id in req.userID to get data from user id in next middleware//
next();

    }
    catch(err){
        res.status(401).send('unauthorized');
        console.log(err);

    }


}

module.exports=authenticate;