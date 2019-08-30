const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')
const Product = require('../models/product')
chai.use(chaiHttp)
const expect = chai.expect
const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWUzOGJhMWM1YjA1M2IwMTUyZjA1OCIsIm5hbWUiOiJhZG0xbiIsImlhdCI6MTU2NzEzNjUzNSwiZXhwIjoxNTY3MTQwMTM1fQ.tnw7IRpjYydOoZLbJKrGOfo_4pB_DkvSylv2Mk1ERh4'
let id = null


describe('PRODUCT TEST', function () {
    describe('POST /products/create', function () {
    it('Should success with status 201', function (done) {
        let product = {
            name: 'Ayam',
            price: '100000',
            stock: 10
        }
        chai
            .request(app)
            .post('/products/create')
            .set('token', adminToken)
            .send(product)
            .end(function (err, res) {
                id = res.body.data._id
                expect(res).to.have.status(201)
                expect(res).to.be.an('object')
                expect(res.body.data).to.have.property('name')
                expect(res.body.data).to.have.property('price')
                expect(res.body.data).to.have.property('stock')
                done()
            })
        })

    it('Should fail with status 400', function (done) {
        let failProduct = {
           image:'',
        }
        chai
            .request(app)
            .post('/products/create')
            .set('token', adminToken)
            .send(failProduct)
            .end(function (err, res) {

                expect(res).to.have.status(400)
                expect(res).to.be.an('object')
                expect(res.body).to.have.property('message')
                done()

            })
    })

    })

    describe('GET /products/', function () {
    it('Should success with status 200', function (done) {
        chai
                .request(app)
                .get('/products/')
                .set('token', adminToken)
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res).to.be.an('object')
                    expect(res.body.data[0]).to.have.property('name')
                    expect(res.body.data[0]).to.have.property('price')
                    expect(res.body.data[0]).to.have.property('stock')
                    done()
                })

    })

        it('Should fail with status 404', function (done) {
            chai
                .request(app)
                .get('/product')
                .set('token', adminToken)
                .end(function (err, res) {
                    expect(res).to.have.status(404)
                    expect(res).to.be.an('object')
                    done()
                })
        })
    })

    describe('GET /products/:id', function () {
        it('Should success with status 200', function (done) {
        chai
                .request(app)
                .get('/products/' + id)
                .set('token', adminToken)
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res).to.be.an('object')
                    expect(res.body.data).to.have.property('name')
                    expect(res.body.data).to.have.property('price')
                    expect(res.body.data).to.have.property('stock')
                    done()
                })
        })

    it('Should fail with status 404', function (done) {
        chai
            .request(app)
            .get('/products/3422342323')
            .set('token', adminToken)
            .end(function (err, res) {
                expect(res).to.have.status(406)
                expect(res).to.be.an('object')
                done()
            })
    })
    })

    describe('DELETE /products/:id', function () {
    it('Should success with status 200', function (done) {
        chai
                .request(app)
                .delete('/products/' + id)
                .set('token', adminToken)
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res).to.be.an('object')
                    expect(res.body.data).to.have.property('name')
                    expect(res.body.data).to.have.property('price')
                    expect(res.body.data).to.have.property('stock')
                    done()
                })
    })

        it('Should fail with status 406', function (done) {
            chai
                .request(app)
                .delete('/products/1234')
                .set('token', adminToken)
                .end(function (err, res) {
                    expect(res).to.have.status(406)
                    expect(res).to.be.an('object')
                    done()
                })
        })
    })

    describe('PATCH /products/:id', function () {
    it('Should success with status 200', function (done) {
        let productUpdate = {
            name: 'Ayam',
            price: '100000',
            stock: 30
        }
        chai
            .request(app)
            .patch('/products/' + id)
            .send(productUpdate)
            .set('token', adminToken)
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                done()
            })

    })

        it('Should fail with status 404', function (done) {
            let productUpdate = {
                name: 'Ayam',
                price: 100000,
                image: 'foto',
                quantity: 30
            }
            chai
                .request(app)
                .patch('/products/342')
                .send(productUpdate)
                .set('token', adminToken)
                .end(function (err, res) {
                    expect(res).to.have.status(406)
                    expect(res).to.be.an('object')
                    done()
                })
        })
    })


})