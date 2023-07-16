import Application from "../models/applicationModel.js";

export const getApplications = async(req,res) =>{
    try {
        const allApplications = await Application.find()
        res.status(200).json({success: true, allApplications})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}