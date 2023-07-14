import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import {User} from "../models/userModel.js"

// register 
export const employerRegister = async (req, res) => {
    try {
        const {
            username,
            role,
            email,
            password
        } = req.body
        const existingUser = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });

        if (existingUser) {
            if (existingUser) {
                return res.status(400).json({ message: { userError: "User Already Exist!" } });
              }
              
        }
        if (existingEmail) {
            return res.status(400).json({ message: { emailError: "Email Already Exist!" } });
        }
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            role,
            email,
            password: passwordHash
        })
        const savedUser = await newUser.save()
        res.status(201).json({success : true, savedUser})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


export const employerLogin = async (req,res) =>{
    try {
        const {username,password} = req.body
        const user = await User.findOne({username : username})

        if(!user) return res.status(400).json({success : false ,message : 'Sorry, User Does not Exist...!'})
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({success : false , msg : "Invalid Credintials"})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        delete user.password

        res.status(200).json({success : true, token, user})
    } catch (err) {
        res.status(500).json({ error: err.message })
        
    }
}