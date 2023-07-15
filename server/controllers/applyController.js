import Application from "../models/applicationModel.js";

export const applyJob = async (req,res) => {
    try {
        const data = req.body
        console.log(data)
        const savedApplication = new Application(data)
        await savedApplication.save()
        res.status(200).json({success: true, data})
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
}
}