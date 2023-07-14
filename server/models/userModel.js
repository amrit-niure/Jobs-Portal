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

const User = mongoose.model('User',userSchema)
const Employer = mongoose.model('Employer',userSchema)
export {User, Employer}