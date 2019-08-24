const Cart = require('../models/cart')

class cartController{
    static createCart(req,res,next){
        Cart.create({})
    }

    static deleteCart(req,res,next){
        Cart.findByIdAndDelete()
    }
}

module.exports = cartController;