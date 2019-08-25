const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')
const authentication = require('../middleware/authentication')

router.post('/create', authentication, transactionsController.createTransaction)
router.patch('/:id', authentication, transactionsController.updateTransaction)





module.exports = router