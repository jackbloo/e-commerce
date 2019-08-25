const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        default: 0
    },
    productStock: {
        type: Number,
        required: true
    },
    checkout_status: {
        type: Boolean,
        default:false
    },
    productId: {type: Schema.Types.ObjectId, ref: 'products'},
    UserId: {type: Schema.Types.ObjectId, ref: 'users' },
    transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
},{
    timestamps: true,
    versionKey: false
})

const carts = mongoose.model('carts', cartSchema)

module.exports = carts