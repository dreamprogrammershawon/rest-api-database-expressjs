const {v4:uuidv4}=require('uuid')
const User = require('../models/user.models')

const getAllUsers =async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            message:"get one users",
            users
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
};

const getOneUsers = async(req,res)=>{
try {
    const user= await User.findOne({id:req.params.id});
    res.status(200).json({
        message:"update user",
        user
    })
} catch (error) {
res.status(500).json(error.message)    
}
}



const createUser= async(req,res)=>{
   try {
    const newUser = User({
        id:uuidv4(),
        name:req.body.name,
        age:Number(req.body.age)
    })
    await newUser.save()
    
    res.status(201).json({
        message:"create users",
        newUser
    })
   } catch (error) {
    res.status(500).json(error.message)
   }
}
const updateUsers = async(req,res)=>{
    try {
        const user = await User.findOne({id:req.body.id})
     user.name = req.body.name;
     age.age=Number(req.body.age);
        await user.save()
        
        res.status(200).json({
            message:"create users",
            user
        })
       } catch (error) {
        res.status(500).json(error.message)
       }
}
const deleteUsers =async (req,res)=>{
    try {
    await User.deleteOne({id:req.params.id});
        res.status(200).json({
            message:"user is deleted",
            
        })
    } catch (error) {
    res.status(500).json(error.message)    
    }
}



module.exports = {getAllUsers, createUser,getOneUsers,deleteUsers,updateUsers}