import express from 'express'
import { createJob } from '../controllers/createJobController.js'
import {verifyToken} from '../middleware/authmiddle.js'
const router = express.Router()

router.post('/',verifyToken,createJob)

export default router