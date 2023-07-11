import Job from "../models/jobModel.js";

export const createJob = async(req,res) =>{
    try {
        console.log(req.body)
        const savedJob = new Job(req.body)
        await savedJob.save()
        res.status(200).json({success: true, savedJob})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

