// const chai = require('chai')
// const app = require('../app')
// const chaiHttp = require('chai-http')
// const transaction = require('../models/transaction')
// chai.use(chaiHttp)
// const expect = chai.expect
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE3MmNjN2M0ODVmNWM1Y2M1YWI4MyIsIm5hbWUiOiJKb2huIiwiZW1haWwiOiJKb2huQGdtYWlsLmNvbSIsImlhdCI6MTU2NjIwODc4M30.s0WZzG4WWm4nLk5umqxmx3ev7YReXKhS6UTOorIBKBo'

// describe('transaction TEST', function () {
    // describe('POST /transaction/create', function () {
    // it('Should success with status 201', function (done) {
    //     let transaction = {
    //         total_price: 200000,
    //         UserId:5d60fafbdccb9119ce22269a,
                // send_status: false,
                // arrived_status:false
    //     }
    //     chai
    //         .request(app)
    //         .post('/transaction/create')
    //         .set('token', token)
    //         .send(transaction)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(201)
    //             expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('total_price')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('send_status')
    //             expect(res.body.data).to.have.property('arrived_status')
    //             done()
    //         })
    //     })

    // it('Should fail with status 500', function (done) {
    //     let failtransaction = {
    //         total_price: 200,
    //     }
    //     chai
    //         .request(app)
    //         .post('/transaction/create')
    //         .set('token', token)
    //         .send(failtransaction)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(500)
    //             expect(res).to.be.an('object')
    //             expect(res.body).to.have.property('message')
    //             done()

    //         })
    // })

    // })

    // describe('GET /transaction/', function () {
    // it('Should success with status 200', function (done) {
    //     chai
    //             .request(app)
    //             .get('/transaction/')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('total_price')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('send_status')
    //             expect(res.body.data).to.have.property('arrived_status')
    //                 done()
    //             })

    // })

    //     it('Should fail with status 404', function (done) {
    //         chai
    //             .request(app)
    //             .get('/transaction')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })


    // describe('DELETE /transaction/:id', function () {
    // it('Should success with status 200', function (done) {
    //     chai
    //             .request(app)
    //             .delete('/transaction/5d5a77d8de0bf766619509ca')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('total_price')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('send_status')
    //             expect(res.body.data).to.have.property('arrived_status')
    //                 done()
    //             })
    // })

    //     it('Should fail with status 404', function (done) {
    //         chai
    //             .request(app)
    //             .delete('/transaction/1234')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })

    // describe('PATCH /transaction/:id', function () {
    // it('Should success with status 200', function (done) {
    //     let transactionUpdate = {
    //          send_status: true
    //     }
    //     chai
    //         .request(app)
    //         .patch('/transaction/5d5a77d2cd17f86654f94991')
    //         .send(transactionUpdate)
    //         .set('token', token)
    //         .end(function (err, res) {
    //             expect(res).to.have.status(200)
    //             expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('total_price')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('send_status')
    //             expect(res.body.data).to.have.property('arrived_status')
    //             done()
    //         })

    // })

    //     it('Should fail with status 404', function (done) {
    //         let transactionUpdate = {
    //             send_status = 0
    //         }
    //         chai
    //             .request(app)
    //             .patch('/transaction/342')
    //             .send(transactionUpdate)
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404)
    //                 expect(res).to.be.an('object')
    //                 done()
    //             })
    //     })
    // })

    // describe('GET /transaction/:id', function () {
    //     it('Should success with status 200', function () {
    //     chai
    //             .request(app)
    //             .get('/transaction/5d5a77d2cd17f86654f94991')
    //             .set('token', token)
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200)
    //                 expect(res).to.be.an('object')
    //             expect(res.body.data).to.have.property('total_price')
    //             expect(res.body.data).to.have.property('UserId')
    //             expect(res.body.data).to.have.property('send_status')
    //             expect(res.body.data).to.have.property('arrived_status')
    //                 done()
    //             })
    //     })

//     it('Should fail with status 404', function (done) {
//         chai
//             .request(app)
//             .get('/transaction/3422342323')
//             .set('token', token)
//             .end(function (err, res) {
//                 expect(res).to.have.status(404)
//                 expect(res).to.be.an('object')
//                 done()
//             })
//     })
//     })
// })