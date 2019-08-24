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
mongoose.connect('mongodb+srv://catlover:iqbal14@cluster0-trxl7.gcp.mongodb.net/e-commerce-dev?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(data => {
    console.log('success')
}).catch(err => {
    console.log('error')
})
app.use('/', routes)

app.use(function(err,req,res,next){
    res.json({
        status: res.status || 500,
        message: err.message || 'Error'
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;