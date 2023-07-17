import Job from "../models/jobModel.js";

export const updateJob = async(req,res) =>{
    try {
        const data = req.body
        const {id} = req.params
        const updatedJob = await Job.findByIdAndUpdate(id,{...data,jobCreator: req.user.id},{ new: true , useFindAndModify: false})
        if(!updatedJob){
            res.status(200).json({msg : `There is no Post with ID : ${id} in the database`})
          }else{
            res.status(200).json({success: true, updatedJob})
          }
      
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

