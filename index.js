const express = require('express');
const app = express();
//on heroku - process.env.PORT could be any port
//on mymachine its undefined
//therefore
const PORT = process.env.PORT || 3000;
//connect to db
require('./db/mongoose');

app.use((req,res, next)=>{
    console.log("middleware");
    next();
})

app.get('/user',(req,res)=>{
    res.send({name: 'ronan'})
})

app.listen(PORT, ()=>{
    console.log("listening");
})