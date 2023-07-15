import express from 'express'
import { employerRegister, jobSeekerRegister, login } from '../controllers/authController.js'
// import { employerLogin ,jobSeekerLogin } from '../controllers/authController.js'
const router = express.Router()

router.post('/employer/register',employerRegister)
router.post('/login',login)
router.post('/jobSeeker/register',jobSeekerRegister)
// router.post('/jobSeeker/login',jobSeekerLogin)

export default router