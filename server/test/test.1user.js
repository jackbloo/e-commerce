const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')
const User = require('../models/user')
chai.use(chaiHttp)
const expect = chai.expect

after(function () {
    return User.deleteMany({})
})
describe('USER TEST', function () {
    describe('POST /user/register', function () {
        it('Should success with status 201', function (done) {
            let user = {
                name: 'John',
                email: 'John@gmail.com',
                password: '123456',
            }
            chai
                .request(app)
                .post('/user/register')
                .send(user)
                .end(function (err, res) {
                    expect(res).to.have.status(201)
                    expect(res).to.be.an('object')
                    expect(res.body.data).to.have.property('email')
                    expect(res.body.data).to.have.property('name')
                    expect(res.body.data).to.have.property('password')
                    expect(res.body.data.name).to.equal(user.name)
                    expect(res.body.data.email).to.equal(user.email)
                    expect(res.body.data.address).to.equal(user.address)
                    expect(res.body.data.password).to.not.equal(user.password)
                    done()
                })
        })

        it('Should fail with status 400', function (done) {
            let failUser = {
                name: 'John',
                email: 'John@gmail.com',
                password: '123456'
            }
            chai
                .request(app)
                .post('/user/register')
                .send(failUser)
                .end(function (err, res) {
                    expect(res).to.have.status(400)
                    expect(res).to.be.an('object')
                    expect(res.body).to.have.property('message').to.be.a('string')
                    expect(res.body.message).to.equal('Email is Already Registered')
                    done()
                })
        })

        it('Should fail with status 400 without name', function (done) {
            let failUser = {
                email: 'John@gmail.com',
                password: '123456'
            }
            chai
                .request(app)
                .post('/user/register')
                .send(failUser)
                .end(function (err, res) {
                    expect(res).to.have.status(400)
                    expect(res).to.be.an('object')
                    expect(res.body).to.have.property('totalError').to.be.an('array')
                    done()
                })
        })


    })


    describe('POST /user/signin', function () {
        this.timeout(5000)
        it('Should success with status 200', function (done) {
            let login = {
                email: 'John@gmail.com',
                password: '123456'
            }
            chai
                .request(app)
                .post('/user/signin')
                .send(login)
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res).to.be.an('object')
                    expect(res.body).to.have.property('token').to.be.a('string')
                    done()
                })
        })

        it('Should fail with wrong email and status 400', function (done) {

            let login = {
                email: 'john@gmail.com',
                password: '123456'
            }
            chai
                .request(app)
                .post('/user/signin')
                .send(login)
                .end(function (err, res) {
                    expect(res).to.have.status(404)
                    expect(res).to.be.an('object')
                    expect(res.body).to.have.property('message').to.be.a('string')
                    expect(res.body.message).to.be.equal('user not found')
                    done()
                })
        })

    })


})