import express from 'express'
import { getMyApplications } from '../controllers/getMyApplicationsController.js'

const router = express.Router()

router.get('/:id',getMyApplications)

export default router