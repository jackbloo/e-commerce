const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    stock: {
        type: Number,
        required: true
    },
},{
    timestamps: true,
    versionKey: false
})

const products = mongoose.model('products', productSchema)

module.exports = products