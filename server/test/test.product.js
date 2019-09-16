const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')
const admin = require('../models/admin')
chai.use(chaiHttp)
const expect = chai.expect
const product = require('../models/product')
let adminToken = null
let id = null
const fs = require('fs')

after(function () {
    return admin.deleteMany({})
})


describe('PRODUCT & ADMIN TEST', function () {


    describe('POST signin Admin', function () {
        it('Should success with status 201 Creating admin account', function (done) {
            let adminAcc = {
                name: 'admin',
                username: '4dmin',
                password: '123456'
            }
            chai
                .request(app)
                .post('/admin/register')
                .send(adminAcc)
                .end(function (err, res) {
                    expect(res).to.have.status(201)
                    expect(res).to.be.an('object')
                    expect(res.body.data).to.have.property('username')
                    expect(res.body.data).to.have.property('name')
                    expect(res.body.data).to.have.property('password')
                    expect(res.body.data.name).to.equal(adminAcc.name)
                    expect(res.body.data.username).to.equal(adminAcc.username)
                    expect(res.body.data.password).to.not.equal(adminAcc.password)
                    done()

                })
        })

        it('Should success with status 200 get Admin Token', function (done) {
            let adminAcc = {
                username: '4dmin',
                password: '123456'
            }
            chai
                .request(app)
                .post('/admin/login')
                .send(adminAcc)
                .end(function (err, res) {
                    adminToken = res.body.token
                    expect(res).to.have.status(200)
                    expect(res).to.be.an('object')
                    expect(res.body).to.have.property('token').to.be.a('string')
                    done()

                })
        })

    })

    describe('POST /products/create', function () {
    it('Should success with status 201', function (done) {
        let product = {
            name: 'Ayam',
            price: '100000',
            stock: 10,

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
                console.log(res.body.totalError)
                expect(res).to.have.status(400)
                expect(res.body).to.have.property('totalError')
                expect(res.body.totalError).to.be.an('array')
                expect(res.body.totalError).to.include('Name is required')
                expect(res.body.totalError).to.include('Price is required')
                expect(res.body.totalError).to.include('Stock is required')
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

    it('Should fail with status 500', function (done) {
        chai
            .request(app)
            .get('/products/3422342323')
            .set('token', adminToken)
            .end(function (err, res) {
                expect(res).to.have.status(500)
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

        it('Should fail with status 500', function (done) {
            chai
                .request(app)
                .delete('/products/1234')
                .set('token', adminToken)
                .end(function (err, res) {
                    expect(res).to.have.status(500)
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

        it('Should fail with status 500', function (done) {
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
                    expect(res).to.have.status(500)
                    expect(res).to.be.an('object')
                    done()
                })
        })
    })


})