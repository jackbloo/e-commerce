const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')


router.post('/login',adminController.loginAdmin)
// router.post('/register',adminController.registerAdmin)







module.exports = router;