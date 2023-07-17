import Application from '../models/applicationModel.js'

export const deleteApplication = async (req,res) => {
    try {
        const id  = req.params.id
        console.log(id)
        const application = await Application.findByIdAndDelete(id);
        if(!application){
          res.status(200).json({msg : `There is no Application with ID : ${id} in the database`})
        }else{
          res.status(200).json({msg: `Application with ID ${id} was deleted.`});
        }


    } catch (err) {
        res.status(409).json({message:` ${err.message}` })
    }
}