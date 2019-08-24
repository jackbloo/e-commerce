const Product = require('../models/product')

class ProductController {
    static createProduct(req, res, next) {
        let {
            name,
            price,
            image,
            quantity
        } = req.body
        Product.create({
            name,
            price,
            image,
            quantity
        }).then(data => {
            res.status(201).json({
                data
            })
        }).catch(err => {
            res.status(500)
            next(err)
        })
    }

    static getProducts(req, res, next) {
        Product.find()
            .then(data => {
                res.status(200).json({
                    data
                }).catch(err => {
                    res.status(404)
                    next(err)
                })
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
        req.body.image && (updatedData.image = req.body.image)
        req.body.quantity && (updatedData.quantity = req.body.quantity)
        Product.findByIdAndUpdate(
            id,
            updatedData, {
                new: true,
                runValidators: true
            }
        ).then(data => {
            res.status(200).json({
                data,
                message: 'Data is successfully updated'
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