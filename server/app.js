if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
    require('dotenv').config();
}
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const morgan = require('morgan')
const routes = require('./routes/index')
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
mongoose.connect(process.env.LINK, {useNewUrlParser: true})
.then(data => {
    console.log('success')
}).catch(err => {
    console.log('error')
})
app.use('/', routes)
app.use(function(err,req,res,next){
    let stats;
    let msg;
    if(err.code == 11000){
        stats = 400
         msg = 'Email is Registered'
    }
    res.status(stats || 500).send({ error: msg })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;