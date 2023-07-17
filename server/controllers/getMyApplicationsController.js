import Application from "../models/applicationModel.js";

export const getMyApplications = async(req,res) =>{
    try {
        const {id} = req.params
        const myApplications = await Application.find({creator : id})
        res.status(200).json({success: true, myApplications})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}