const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    total_price:{
        type: Number,
        required: true
    },
    UserId: {type: Schema.Types.ObjectId, ref: 'users' }
},{
    timestamps: true,
    versionKey: false
})

const transactions = mongoose.model('transactions', transactionSchema)

module.exports = transactions