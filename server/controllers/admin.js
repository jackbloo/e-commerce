const admin = require('../models/admin')
const {encrypt} = require('../helpers/hash')
const {decrypt} = require('../helpers/hash')
const {generateToken} = require('../helpers/token')

class adminController {
    static registerAdmin(req,res,next){
        let {name,username,password} = req.body
        admin.create({
            name,
            username,
            password: encrypt(password)
        }).then(data => {
           res.status(201).json({
               data
           })
        }).catch(err => {
            res.send(err.message)
        })
    }

    static loginAdmin(req,res,next){
        const {
            username,
            password
        } = req.body
        admin.findOne({
            username
        }).then(user => {
            if (user) {
                if (decrypt(password, user.password)) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                    const token = generateToken(payload)
                    res.status(200).json({
                        token
                    })
                } else {
                    res.status(404).json({
                        message: 'Username/Password Not Found'
                    })
                }
            } else{
                res.status(404).json({
                    message: 'Username/Password Not Found'
                })
            } 
        }).catch(err => {
            next(err)
        })
    }
}

module.exports = adminController