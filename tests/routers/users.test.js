const request = require('supertest');
const app = require('../../app');
const UsersModel = require('../../models/users');
//can be reused
// const { userOneId, userOne, setupDatabase } = require('./fixtures/db')
const { setupDatabase } = require('../fixtures/db')

//runs before every test
beforeEach(setupDatabase);
 
// GET ALL USERS - /users - GET
// ADD A NEW USER - /user - POST
// EDIT A USER - /user/:id - PATCH
// DELETE A USER - /user/:id - DELETE


// GET ALL USERS - /users - GET
test('should get all users', async ()=>{ 
    const res = await request(app)
        .get('/')
        .expect(200)

        console.log(res.body);
    // expect(res.success).toEqual(true)
})

test('should create new user', async ()=>{
    const res = await request(app)
        .post('/user')
        .send({name: 'jill', age: '12'})
        .expect(200)

    expect(res.body.success).toEqual(true)
    expect(res.body.userSaved.name).toEqual('jill')
})