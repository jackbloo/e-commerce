const express = require('express')
const router = express.Router()
const images =require('../helpers/images')
const productController = require('../controllers/product')
const authorization = require('../middleware/authorization')
const authentication = require('../middleware/authentication')

router.get('/', authentication, productController.getProducts)
router.get('/:id',authentication, productController.getOne)
router.post('/create', authentication, authorization, images.multer.single('image'), 
images.sendUploadToGCS,productController.createProduct)
router.delete('/:id', authentication, authorization, productController.deleteProduct)
router.patch('/:id', authentication, authorization,images.multer.single('image'), 
images.sendUploadToGCS, productController.updateProduct)






module.exports = router;