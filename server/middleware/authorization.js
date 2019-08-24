const Admin = require('../models/admin')

function authorization(req, res, next) {
    let {
        id
    } = req.params
    Admin.findById(id)
    .then(data => {
        if(data){
            next()
        } else {
            throw err
        }
    }).catch(next)


}

module.exports = authorization;