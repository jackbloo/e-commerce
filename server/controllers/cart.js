const Cart = require('../models/cart')

class cartController{
    static getCart(req,res,next){
        Cart.find({UserId: id, checkout_status: false})
        .then(data => {
            
        }).catch(next)
    }
    static createCart(req,res,next){
        Cart.create({})
    }

    static deleteCart(req,res,next){
        Cart.findByIdAndDelete()
    }
}

module.exports = cartController;