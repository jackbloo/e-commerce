// const chai = require('chai')
// const app = require('../app')
// const chaiHttp = require('chai-http')
// const Product = require('../models/product')
// chai.use(chaiHttp)
// const expect = chai.expect
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE3MmNjN2M0ODVmNWM1Y2M1YWI4MyIsIm5hbWUiOiJKb2huIiwiZW1haWwiOiJKb2huQGdtYWlsLmNvbSIsImlhdCI6MTU2NjIwODc4M30.s0WZzG4WWm4nLk5umqxmx3ev7YReXKhS6UTOorIBKBo'

// describe('PRODUCT TEST', function () {
    // describe('POST /products/create', function () {
    // it('Should success with status 201', function (done) {
    //     let product = {
    //         name: 'Ayam',
    //         price: 100000,
    //         image: 'foto',
    //         stock: 10
    //     }
    //     chai
    //         .request(app)
    //         .post('/products/create')
    //         .set('token', token)
    //         .send(product)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(201)
    //             expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('name')
    //             expect(res.body.data).to.have.property('price')
    //             expect(res.body.data).to.have.property('image')
    //             expect(res.body.data).to.have.property('quantity')
    //             done()
    //         })
    //     })

    // it('Should fail with status 500', function (done) {
    //     let failProduct = {
    //         name: 'Ayam',
    //     }
    //     chai
    //         .request(app)
    //         .post('/products/create')
    //         .set('token', token)
    //         .send(failProduct)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(500)
    //             expect(res).to.be.an('object')
    //             expect(res.body).to.have.property('message')
    //             done()

    //         })
    // })

    // })

    // describe('GET /products/', function () {
    // it('Should success with status 200', function (done) {
    //     chai
    //             .request(app)
    //             .get('/products/')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //                 expect(res.body.data[0]).to.have.property('name')
    //                 expect(res.body.data[0]).to.have.property('price')
    //                 expect(res.body.data[0]).to.have.property('image')
    //                 expect(res.body.data[0]).to.have.property('stock')
    //                 done()
    //             })

    // })

    //     it('Should fail with status 404', function (done) {
    //         chai
    //             .request(app)
    //             .get('/product')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 console.log(res.body)
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })


    // describe('DELETE /products/:id', function () {
    // it('Should success with status 200', function (done) {
    //     chai
    //             .request(app)
    //             .delete('/products/5d5a77d8de0bf766619509ca')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //                 expect(res.body.data[0]).to.have.property('name')
    //                 expect(res.body.data[0]).to.have.property('price')
    //                 expect(res.body.data[0]).to.have.property('image')
    //                 expect(res.body.data[0]).to.have.property('quantity')
    //                 done()
    //             })
    // })

    //     it('Should fail with status 404', function (done) {
    //         chai
    //             .request(app)
    //             .delete('/products/1234')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })

    // describe('PATCH /products/:id', function () {
    // it('Should success with status 200', function (done) {
    //     let productUpdate = {
    //         name: 'Ayam',
    //         price: 100000,
    //         image: 'foto',
    //         stock: 30
    //     }
    //     chai
    //         .request(app)
    //         .patch('/products/5d5a77d2cd17f86654f94991')
    //         .send(productUpdate)
    //         .set('token', token)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(200)
    //             expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('name')
    //             expect(res.body.data).to.have.property('price')
    //             expect(res.body.data).to.have.property('image')
    //             expect(res.body.data).to.have.property('stock')
    //             done()
    //         })

    // })

    //     it('Should fail with status 404', function (done) {
    //         let productUpdate = {
    //             name: 'Ayam',
    //             price: 100000,
    //             image: 'foto',
    //             quantity: 30
    //         }
    //         chai
    //             .request(app)
    //             .patch('/products/342')
    //             .send(productUpdate)
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })

    // describe('GET /products/:id', function () {
    //     it('Should success with status 200', function () {
    //     chai
    //             .request(app)
    //             .get('/products/5d5a77d2cd17f86654f94991')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //                 expect(res.body.data).to.have.property('name')
    //                 expect(res.body.data).to.have.property('price')
    //                 expect(res.body.data).to.have.property('image')
    //                 expect(res.body.data).to.have.property('quantity')
    //                 done()
    //             })
    //     })

//     it('Should fail with status 404', function (done) {
//         chai
//             .request(app)
//             .get('/products/3422342323')
//             .set('token', token)
//             .end(function (err, res) {
//                 expect(res).to.have.status(404)
//                 expect(res).to.be.an('object')
//                 done()
//             })
//     })
//     })
// })