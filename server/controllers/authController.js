import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import {JobSeeker,Employer} from "../models/userModel.js"

// register 
export const employerRegister = async (req, res) => {
    try {
        const {
            username,
            role,
            email,
            password
        } = req.body
        console.log(req.body)
        const existingUser = await Employer.findOne({ username });
        const existingEmail = await Employer.findOne({ email });

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
        const newUser = new Employer({
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


// register 
export const jobSeekerRegister = async (req, res) => {
    try {
        const {
            username,
            role,
            email,
            password
        } = req.body
        console.log(req.body)
        const existingUser = await JobSeeker.findOne({ username });
        const existingEmail = await JobSeeker.findOne({ email });

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
        const newUser = new JobSeeker({
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



export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        let user = await Employer.findOne({ username: username });

        if (!user) {
            const jobSeekerUser = await JobSeeker.findOne({ username: username });
            if (!jobSeekerUser) {
                return res.status(400).json({ success: false, message: 'Sorry, User Does not Exist...!' });
            }
            user = jobSeekerUser;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, msg: "Invalid Credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;

        res.status(200).json({ success: true, token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


