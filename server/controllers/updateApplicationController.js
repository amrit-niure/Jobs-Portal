import Application from "../models/applicationModel.js";

export const updateApplication = async(req,res) =>{
    try {
        const data = req.body
        const {id} = req.params
        const updatedApplication = await Application.findByIdAndUpdate(id,data,{ new: true , useFindAndModify: false})
        if(!updatedApplication){
            res.status(200).json({msg : `There is no Application with ID : ${id} in the database`})
          }else{
            res.status(200).json({success: true, updatedApplication})
          }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

