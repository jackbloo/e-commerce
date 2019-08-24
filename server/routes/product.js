const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
const authentication = require('../middleware/authentication')

router.get('/', productController.getProducts)
router.get('/:id',authentication, productController.getOne)
router.post('/create', authentication, productController.createProduct)
router.delete('/:id', authentication, productController.deleteProduct)
router.patch('/:id', authentication, productController.updateProduct)






module.exports = router;