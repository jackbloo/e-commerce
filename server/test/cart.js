const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')
const Cart = require('../models/cart')
chai.use(chaiHttp)
const expect = chai.expect
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE3MmNjN2M0ODVmNWM1Y2M1YWI4MyIsIm5hbWUiOiJKb2huIiwiZW1haWwiOiJKb2huQGdtYWlsLmNvbSIsImlhdCI6MTU2NjIwODc4M30.s0WZzG4WWm4nLk5umqxmx3ev7YReXKhS6UTOorIBKBo'

// describe('cart TEST', function () {
    // describe('POST /carts/create', function () {
    // it('Should success with status 201', function (done) {
    //     let cart = {
    //             productName: 'baju',
    //             productPrice: '20000',
    //             quantity: '20'
    //             productStock: 50
    //             checkout_status:false
    //             productId: 5d60ef177b61760813398e6d
    //             UserId : 5d60fafbdccb9119ce22269a
    //             transactionId : 
    //     }
    //     chai
    //         .request(app)
    //         .post('/carts/create')
    //         .set('token', token)
    //         .send(cart)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(201)
    //             expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('productName')
    //             expect(res.body.data).to.have.property('productPrice')
    //             expect(res.body.data).to.have.property('quantity')
    //             expect(res.body.data).to.have.property('productStock')
    //             expect(res.body.data).to.have.property('checkout_status')
    //             expect(res.body.data).to.have.property('productId')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('transactionId')
    //             done()
    //         })
    //     })

    // it('Should fail with status 500', function (done) {
    //     let failcart = {
    //         total_price: 200,
    //     }
    //     chai
    //         .request(app)
    //         .post('/carts/create')
    //         .set('token', token)
    //         .send(failcart)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(500)
    //             expect(res).to.be.an('object')
    //             expect(res.body).to.have.property('message')
    //             done()

    //         })
    // })

    // })

    // describe('GET /carts/', function () {
    // it('Should success with status 200', function (done) {
    //     chai
    //             .request(app)
    //             .get('/carts/')
    //             .set('token', token)
    //             .end(function (err, res) {
    //             expect(res).to.have.status(200)
    //             expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('productName')
    //             expect(res.body.data).to.have.property('productPrice')
    //             expect(res.body.data).to.have.property('quantity')
    //             expect(res.body.data).to.have.property('productStock')
    //             expect(res.body.data).to.have.property('checkout_status')
    //             expect(res.body.data).to.have.property('productId')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('transactionId')
    //                 done()
    //             })

    // })

    //     it('Should fail with status 404', function (done) {
    //         chai
    //             .request(app)
    //             .get('/carts')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })


    // describe('DELETE /carts/:id', function () {
    // it('Should success with status 200', function (done) {
    //     chai
    //             .request(app)
    //             .delete('/cart/5d5a77d8de0bf766619509ca')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('productName')
    //             expect(res.body.data).to.have.property('productPrice')
    //             expect(res.body.data).to.have.property('quantity')
    //             expect(res.body.data).to.have.property('productStock')
    //             expect(res.body.data).to.have.property('checkout_status')
    //             expect(res.body.data).to.have.property('productId')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('transactionId')
    //                 done()
    //             })
    // })

    //     it('Should fail with status 404', function (done) {
    //         chai
    //             .request(app)
    //             .delete('/carts/1234')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })

    // describe('PATCH /carts/:id', function () {
    // it('Should success with status 200', function (done) {
    //     let cartUpdate = {
    //          send_status: true
    //     }
    //     chai
    //         .request(app)
    //         .patch('/carts/5d5a77d2cd17f86654f94991')
    //         .send(cartUpdate)
    //         .set('token', token)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(200)
    //             expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('productName')
    //             expect(res.body.data).to.have.property('productPrice')
    //             expect(res.body.data).to.have.property('quantity')
    //             expect(res.body.data).to.have.property('productStock')
    //             expect(res.body.data).to.have.property('checkout_status')
    //             expect(res.body.data).to.have.property('productId')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('transactionId')
    //             done()
    //         })

    // })

    //     it('Should fail with status 404', function (done) {
    //         let cartUpdate = {
    //             send_status = 0
    //         }
    //         chai
    //             .request(app)
    //             .patch('/carts/342')
    //             .send(cartUpdate)
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })

    // describe('GET /carts/:id', function () {
    //     it('Should success with status 200', function () {
    //     chai
    //             .request(app)
    //             .get('/carts/5d5a77d2cd17f86654f94991')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('productName')
    //             expect(res.body.data).to.have.property('productPrice')
    //             expect(res.body.data).to.have.property('quantity')
    //             expect(res.body.data).to.have.property('productStock')
    //             expect(res.body.data).to.have.property('checkout_status')
    //             expect(res.body.data).to.have.property('productId')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('transactionId')
    //                 done()
    //             })
    //     })

//     it('Should fail with status 404', function (done) {
//         chai
//             .request(app)
//             .get('/carts/3422342323')
//             .set('token', token)
//             .end(function (err, res) {
//                 expect(res).to.have.status(404)
//                 expect(res).to.be.an('object')
//                 done()
//             })
//     })
//     })
// })