const express = require('express');
const app = express();

console.log("MODE = ", process.env.MODE, process.env.DB_URL);
//on heroku - process.env.PORT could be any port
//on mymachine its undefined
//therefore
const PORT = process.env.PORT || 3000;
//connect to db
require('./db/mongoose');
app.use(express.json());

const userRouter = require('./routers/users');

app.use((req,res, next)=>{
    console.log("middleware");
    next();
})

app.use(userRouter)

app.get('*', (req,res, next)=>{
   res.send('app')
})

app.listen(PORT, ()=>{
    console.log("listening");
})