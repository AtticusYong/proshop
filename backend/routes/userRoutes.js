import express from 'express'
// import asyncHandler from 'express-async-handler'
const router = express.Router()
// import Product from '../models/productModel.js'
import { authUser,registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.post('/login', authUser)

export default router