import Job from '../models/jobModel.js'

export const deleteJob = async (req,res) => {
    try {
        const id  = req.params.id
        console.log(id)
        const job = await Job.findByIdAndDelete(id);
        if(!job){
          res.status(200).json({msg : `There is no Job with ID : ${id} in the database`})
        }else{
          res.status(200).json({msg: `Job with ID ${id} was deleted.`});
        }


    } catch (err) {
        res.status(409).json({message:` ${err.message}` })
    }
}