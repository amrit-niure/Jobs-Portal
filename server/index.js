import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
// importing Routes 
import authRoutes from './routes/authRoutes.js'
import createJobRoute from './routes/createJobRoute.js'
import getJobsRoute from './routes/getJobsRoute.js'
import getListingRoute from './routes/getListingRoute.js'
import filterRoutes from './routes/filterRoutes.js'
import deleteJobRoute from './routes/deleteJobRoute.js'
import updateRoute from './routes/updateRoute.js'

const app = express()
dotenv.config()
// Using  middlewares 
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan("common"))
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}))
app.use(bodyParser.json({limit : '30mb', extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb', extended : true}))

// To get the file directory with its file name 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Images Storage Setup using multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
// multer middleware to upload files
const upload = multer({storage: storage});

// Routes with multer upload 




// Routes
app.use('/auth', authRoutes)
app.use('/createjob', createJobRoute)
app.use('/update', updateRoute)
app.use('/alljobs',getJobsRoute )
app.use('/listedjobs',getListingRoute )
app.use('/search',filterRoutes )
app.use('/delete',deleteJobRoute)



// Moongoose + server Setup
const PORT = process.env.PORT || 8080
const connectDB = async () => {
    try {
        // connection string 
        const con = await mongoose.connect('mongodb://127.0.0.1:27017/jobsportal', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Mongo DB Connected : ${con.connection.host}`)
        app.listen(PORT,()=> console.log(`Server Listening on port : ${PORT}`))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
// Establish a connection 
connectDB()
