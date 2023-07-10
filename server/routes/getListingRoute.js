import express from 'express'
import { getListings } from '../controllers/getListingsController.js'

const router = express.Router()

router.get('/:userID',getListings)

export default router