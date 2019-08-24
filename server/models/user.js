const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate:{
            validator: function(value){
                return new Promise((req,res)=>{
                    users.findOne({
                        email: value,
                        _id: {
                            $ne: this._id
                        }
                    }).then(found => {
                        if(found){
                            resolve(false)
                        } else {
                            resolve(true)
                        }
                    })
                })
            }
        }
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true,
    versionKey: false
})

const users = mongoose.model('users', userSchema)

module.exports = users