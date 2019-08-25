const Cart = require('../routes/cart')
const User = require('../routes/user')
const Product = require('../routes/product')
const Admin = require('../routes/admin')
const transaction = require('../routes/transaction')
const express = require('express')
const router = express.Router()

router.use('/user', User)
router.use('/carts', Cart)
router.use('/products', Product)
router.use('/admin', Admin)
router.use('/transaction', transaction)






module.exports= router;