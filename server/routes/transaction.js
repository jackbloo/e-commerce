const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.post('/create', authentication, transactionsController.createTransaction)
router.patch('/:id', authentication, transactionsController.updateTransaction)
router.get('/one', authentication, transactionsController.getTransactionOne)
router.get('/', authentication, authorization, transactionsController.getTransactions)





module.exports = router