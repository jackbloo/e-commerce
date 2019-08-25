const Cart = require('../models/cart')

class cartController{
    static getCart(req,res,next){
        let {id} = req.decode
        Cart.find({UserId: id, checkout_status: false})
        .then(data => {
            res.status(200).json({
                data
            })
        }).catch(next)
    }
    static createCart(req,res,next){
        let UserId = req.decode.id
        let productId = req.params.id
        let productName = req.body.name
        let productPrice = req.body.price
        let productStock = req.body.stock
        Cart.create({
            UserId,
            productId,
            productName,
            productPrice,
            productStock
        }).then((data)=>{
            res.status(201).json({
                data
            })
        }).catch(next)
    }

    static deleteCart(req,res,next){
        let id= req.params.id
        Cart.findByIdAndDelete(id)
        .then(data => {
            res.status(200).json({
                data
            })
        }).catch(next)
    }

    static updateCart(req,res,next){
        let {id} = req.params
        let updatedData = {}
        req.body.quantity && (updatedData.quantity = req.body.quantity)
        req.body.checkout_status  && (updatedData.checkout_status = req.body.checkout_status)
        Cart.findByIdAndUpdate(id, updatedData,{
            new: true
        }).then(data => {
            res.status(200).json({
                data
            })
        }).catch(next)
    }

    static oneCart(req,res,next){
        let {id} = req.decode
        let productId = req.params.id
        Cart.find({UserId: id, productId, checkout_status: false})
        .then(data=> {
            res.status(200).json({
                data
            })
        }).catch(next)
    }
}

module.exports = cartController;