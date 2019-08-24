const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')


router.post('/:id',cartController.createCart)
router.get('/', cartController)
router.delete('/:id',cartController.deleteCart)







module.exports = router;