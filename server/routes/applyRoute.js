import express from 'express'
import { applyJob } from '../controllers/applyController.js'
const router = express.Router()

router.post('/:id',applyJob)

export default router