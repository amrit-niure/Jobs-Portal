import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        enum :["employer","jobSeeker"],
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const JobSeeker = mongoose.model('JobSeeker',userSchema)
const Employer = mongoose.model('Employer',userSchema)
export {JobSeeker, Employer}