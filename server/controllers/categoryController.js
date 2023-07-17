import Job from "../models/jobModel.js";

export const getCategory = async(req,res) =>{
    try {
        const {id} = req.params
        const jobsByCategory = await Job.find({category: id})
        res.status(200).json({success: true, jobsByCategory})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

