import express from 'express'
import { createJob } from '../controllers/createJobController.js'

const router = express.Router()

router.post('/',createJob)

export default router