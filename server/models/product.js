const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price:{
        type: String,
        required: [true, 'Price is required']
    },
    image: {
        type: String,
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required']
    },
},{
    timestamps: true,
    versionKey: false
})

const products = mongoose.model('products', productSchema)

module.exports = products