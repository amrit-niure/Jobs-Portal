import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    applicant : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
    },
    creator : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
    },
    coverLetter : {
        type : String,
    },
    qualification : {
        type : String,
        required : true
    },
    
})