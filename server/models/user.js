const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        unique:true
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
},{
    timestamps: true,
    versionKey: false
})

const users = mongoose.model('users', userSchema)

module.exports = users