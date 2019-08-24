const Product = require('../models/product')

class ProductController {
    static createProduct(req, res, next) {
        let {
            name,
            price,
            stock
        } = req.body
        let image = req.file.cloudStoragePublicUrl
        Product.create({
            name,
            price,
            image,
            stock
        }).then(data => {
            res.status(201).json({
                data
            })
        }).catch(err => {
            next(err)
        })
    }

    static getProducts(req, res, next) {
        Product.find().sort({createdAt:-1})
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(err => {
                res.status(404)
                next(err)
            })
    }

    static deleteProduct(req, res, next) {
        let {
            id
        } = req.params
        Product.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(err => {
                res.status(404)
                next(err)
            })
    }

    static updateProduct(req, res, next) {
        let {
            id
        } = req.params
        let updatedData = {}
        req.body.name && (updatedData.name = req.body.name)
        req.body.price && (updatedData.price = req.body.price)
        req.file.cloudStoragePublicUrl && (updatedData.image = req.file.cloudStoragePublicUrl)
        req.body.stock && (updatedData.stock = req.body.stock)
        Product.findByIdAndUpdate(
            id,
            updatedData, {
                new: true,
                runValidators: true
            }
        ).then(data => {
            res.status(200).json({
                data
            })
        }).catch(err => {
            res.status(404)
            next(err)
        })
    }

    static getOne(req,res,next){
        let {id} = req.params
        Product.findById(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(err => {
                res.status(404)
                next(err)
            })
    }





}

module.exports = ProductController;