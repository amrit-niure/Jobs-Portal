import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobSeeker',
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employer',
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true
    },
    links: {
        type: String,
    },
    coverLetter: {
        type: String,
    },
    resume: {
        type: String,
    },


},
{timestamps : true}
)

const Application = mongoose.model("Application",applicationSchema)
export default Application