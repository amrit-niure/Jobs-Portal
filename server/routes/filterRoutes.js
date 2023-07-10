import express from 'express'
import { getByFilter } from '../controllers/filterControllers.js'
import { getByFilters } from '../controllers/filterControllers.js'

const router = express.Router()

// Results that matches every filters
router.get('/',getByFilter)
// Results that matches at least one filters
router.get('/s',getByFilters)

export default router