// const chai = require('chai')
// const app = require('../app')
// const chaiHttp = require('chai-http')
// const Admin = require('../models/admin')
// chai.use(chaiHttp)
// const expect = chai.expect

// describe('ADMIN TEST', function () {

//     describe('POST /user/signin', function () {
//         it('Should success with status 200', function (done) {
//             let login = {
//                 email: 'John@gmail.com',
//                 password: '123456'
//             }
//             chai
//                 .request(app)
//                 .post('/admin/signin')
//                 .send(login)
//                 .end(function (err, res) {
//                     console.log(res.body)
//                     expect(res).to.have.status(200)
//                     expect(res).to.be.an('object')
//                     expect(res.body).to.have.property('token')
//                     done()
//                 })
//         })
//         it('Should fail with status 404', function (done) {
//             let login = {
//                 email: 'John@gmail.com',
//             }
//             chai
//                 .request(app)
//                 .post('/admin/signin')
//                 .send(login)
//                 .end(function (err, res) {
//                     expect(res).to.have.status(404)
//                     expect(res).to.be.an('object')
//                     done()
//                 })
//         })
//     })


// })