import Job from "../models/jobModel.js";

export const getJobs = async(req,res) =>{
    try {
        const allJobs = await Job.find()
        res.status(200).json({success: true, allJobs})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}