import express from 'express'
import { deleteApplication } from '../controllers/deleteApplicationsController.js'

const router = express.Router()

router.delete('/application/:id',deleteApplication)

export default router