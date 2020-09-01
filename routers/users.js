const express = require('express');
const router = new express.Router();
const UsersModel  = require('../models/users');

// GET ALL USERS - /users - GET
// ADD A NEW USER - /user - POST
// EDIT A USER - /user/:id - PATCH
// DELETE A USER - /user/:id - DELETE

router.get('/users', async(req,res)=>{
    try {
        const users = await UsersModel.find({})
        res.status(200).send({success: true, users})
    } catch (error) {
        res.send({error: true})
    }
})

router.post('/user', async(req, res)=>{
    try {
        const user = new UsersModel({name: req.body.name, age: req.body.age});
        let userSaved = await user.save()
        res.status(200).send({success: true, userSaved})
    } catch (error) {
        res.send({error: true, msg: error.message})
    }
})
router.patch('/user/:id', async(req, res)=>{
    console.log(req.params.id, req.body);
    try {
        let userEdited = await UsersModel.findOneAndUpdate({_id: req.params.id}, req.body)
        res.status(200).send({success: true, userEdited})
    } catch (error) {
        res.send({error: true, msg: error.message})
    }
})
router.delete('/user/:id', async(req, res)=>{
    try {
        let userDeleted = await UsersModel.findOneAndDelete({_id: req.params.id})
        res.status(200).send({success: true, userDeleted})
    } catch (error) {
        res.send({error: true, msg: error.message})
    }
})

module.exports = router;