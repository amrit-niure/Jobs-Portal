import express from 'express'
import { employerRegister } from '../controllers/authController.js'
import { employerLogin } from '../controllers/authController.js'
const router = express.Router()

router.post('/employer/register',employerRegister)
router.post('/employer/login',employerLogin)

export default router