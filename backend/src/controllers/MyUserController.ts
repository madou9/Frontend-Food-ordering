import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req:Request, res: Response) =>{
    // 1. check if the user exists
    // 2. create the user if it doesn't exit
    // 3.return the user object to the calling client

    try{
        const {auth0Id} = req.body;
        const existingsUser = await User.findOne({ auth0Id})

        if (existingsUser){
            return res.status(200).send();
        }
        const newUser = new User(req.body);

        res.status(201).json(newUser.toObject());
        await newUser.save();
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Error creating user "});
        
    }
};

export default {
    createCurrentUser
}