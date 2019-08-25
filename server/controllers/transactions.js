const transcations = require('../models/transactions')

class transactionsController {
    static createTransaction(req,res,next){
        let {id} = req.decode
        let total_price = req.body.totalPrice
        transcations.create({
            UserId:id,
            total_price
        }).then(data => {
            res.status(201).json({
                data
            })
        }).catch(next)
    }

    static updateTransaction(req,res,next){
        let {id} = req.params
        let updatedData = {}
        req.body.send_status  && (updatedData.send_status = req.body.send_status)
        req.body.arrived_status  && (updatedData.arrived_status = req.body.arrived_status)
        transcations.findByIdAndUpdate(id, updatedData,{
            new: true,
            runValidators: true
        }).then(data => {
            res.status(200).json({
                data
            }).catch(next)
        })
    }
}

module.exports = transactionsController