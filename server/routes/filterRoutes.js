import express from 'express'
import { getByFilter } from '../controllers/filterControllers.js'

const router = express.Router()

router.get('/',getByFilter)

export default router