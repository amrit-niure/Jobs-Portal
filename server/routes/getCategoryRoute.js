import express from 'express'
import { getCategory } from '../controllers/categoryController.js'

const router = express.Router()

router.get('/:id',getCategory)

export default router