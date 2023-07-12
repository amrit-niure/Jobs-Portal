import express from 'express'
import { updateJob } from '../controllers/updateController.js'

const router = express.Router()

router.put('/:id',updateJob)

export default router