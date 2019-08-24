const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')


router.post('/:id',cartController.createCart)
router.delete('/:id',cartController.deleteCart)







module.exports = router;