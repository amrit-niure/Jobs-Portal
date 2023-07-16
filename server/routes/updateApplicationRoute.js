import express from 'express'
import { updateApplication } from '../controllers/updateApplicationController.js'

const router = express.Router()

router.put('/:id',updateApplication)

export default router