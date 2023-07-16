import express from 'express'
import { getApplications } from '../controllers/getApplicationsController.js'

const router = express.Router()

router.get('/',getApplications)

export default router