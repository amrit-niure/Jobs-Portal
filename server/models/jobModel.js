import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    // jobCreator : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     // required : true
    // },
    company : {
        type : String,
        required : true
    },
    website : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    experience : {
        type : String,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    deadline : {
        type : Date,
        required : true
    },
    applicationLink : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
},
{timestamps: true}
)

const Job = mongoose.model('Job',jobSchema)
export default Job
