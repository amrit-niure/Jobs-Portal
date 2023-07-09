import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    jobCreator : {
        type : mongoose.Schema.Types.ObjectId,
        // required : true
    },
    company : {
        type : String,
        required : true
    },
    website : {
        type : String,
        required : true
    },
    level : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    type : {
        type : String,
        enum: ['Full-Time', 'Part-Time', 'Freelancing', 'Contract'],
        required : true
    },
    category : {
        type : String,
        enum: ['Information Technology(IT)', 'Sales and Marketing', 'Hospitality and Tourism', 'Engineering','Healthcare and Medical','Support','Administrative and Clerical','Education and Teaching','Finance and Accounting', 'Customer Service','Manufacturing and Production','Legal','Media and Communication','Human Resources','Research and Development','Social Services','Others'],
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
        enum: ['Fresher/Intern', 'One Year', 'Two Years', 'Three Years','Less Than Five years','Five Years +','A Decade','More Than A Decade'],
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