import express from 'express'
import { updateJob } from '../controllers/updateController.js'
import { verifyToken } from '../middleware/authmiddle.js'
const router = express.Router()

router.put('/:id',verifyToken, updateJob)

export default router