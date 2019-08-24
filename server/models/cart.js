const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    quantity:{
        type: Number,
        required: true
    },
    checkout_status: {
        type: Boolean,
        default:false
    },
    productId: {type: Schema.Types.ObjectId, ref: 'products'},
    UserId: {type: Schema.Types.ObjectId, ref: 'users' }
},{
    timestamps: true,
    versionKey: false
})

const carts = mongoose.model('carts', cartSchema)

module.exports = carts