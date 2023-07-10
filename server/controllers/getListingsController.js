import Job from "../models/jobModel.js";

export const getListings = async(req,res) =>{
    try {
        const {userID} = req.params
        console.log(userID)
        const myListing = await Job.find({jobCreator : userID})
        res.status(200).json({success: true, myListing})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}