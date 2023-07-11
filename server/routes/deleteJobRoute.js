import express from 'express'
import { deleteJob } from '../controllers/deleteJobController.js'

const router = express.Router()

router.delete('/:id',deleteJob)

export default router