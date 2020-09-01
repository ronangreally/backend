const mongoose = require('mongoose');
const UsersModel = require('../../models/users');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'bill',
    age: '22'
}
const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    name: 'mike',
    age: '32'
}

const setupDatabase = async () =>{
    //delete db user/tasks before tests
    await UsersModel.deleteMany();
    await new UsersModel(userOne).save();
    await new UsersModel(userTwo).save();
}

module.exports = {
    userOneId,
    userOne,
    setupDatabase,
    userTwoId,
    userTwo
}