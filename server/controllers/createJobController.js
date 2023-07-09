import Job from "../models/jobModel.js";

export const createJob = async(req,res) =>{
    try {
        const {jobCreator, company, website, title, category, type, location, salary, experience, qualification, deadline, applicationLink, description} = req.body
        console.log(req.body)
        const savedJob = new Job(req.body)
        await savedJob.save()
        res.status(200).json({success: true, savedJob})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}