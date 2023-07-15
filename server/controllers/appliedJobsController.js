import Application from "../models/applicationModel.js";

export const getAppliedJobs = async (req,res) => {
    try {
       
        const {userId} = req.params
        const appliedJobs = await Application.find({applicant : userId})
        if(!appliedJobs){
            res.status(200).json({msg : `There is no applications of ID : ${userId} in the database`})
          }
        res.status(200).json({success: true, appliedJobs})
    } catch (error) {
        res.status(500).json({success: false, error})
}
}