import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum :["As an Employer","As a Job Seeker"],
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('User',userSchema)
export default User