import express from 'express'
import { getJobs } from '../controllers/getJobsController.js'

const router = express.Router()

router.get('/',getJobs)

export default router