import express from 'express'
import { getAppliedJobs } from '../controllers/appliedJobsController.js'

const router = express.Router()

router.get('/:userId',getAppliedJobs)

export default router