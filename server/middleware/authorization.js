const Admin = require('../models/admin')

function authorization(req, res, next) {
    let {
        id
    } = req.decode
    Admin.findById(id)
    .then(data => {
        if(data){
            next()
        } else {
        res.status(404)
        }
    }).catch(next)


}

module.exports = authorization;