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
        }).then(data => {
            console.log(data)
            res.status(200).json({
                data
            })
        }).catch(next)
    }

    static getTransactionOne(req,res,next){
        let {id} = req.decode
        transcations.find({UserId: id}).sort({
            createdAt: -1
        })
        .then(data => {
            res.status(200).json({
                data
            })
        }).catch(next)
    }

    static getTransactions(req,res,next){
        transcations.find().sort({
            createdAt: -1
        })
        .then(data => {
            res.status(200).json({
                data
            })
        }).catch(next)
    }
}

module.exports = transactionsController