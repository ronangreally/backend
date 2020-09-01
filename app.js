const express = require('express');
const app = express();
const path = require('path')
const publicPathProduction = path.join(__dirname,'frontend', 'dist')
const publicPathDev = path.join(__dirname,'frontend', 'dev-build')
let publicPath;
console.log("publicPathProduction", publicPathProduction);
console.log("publicPathDev", publicPathDev);
console.log("MODE = ", process.env.MODE, process.env.DB_URL);
if(process.env.MODE === 'production') {
    publicPath = publicPathProduction;
} else {
    publicPath = publicPathDev;
}
//on heroku - process.env.PORT could be any port
//on mymachine its undefined
//therefore
// const PORT = process.env.PORT || 3000;
//connect to db
require('./db/mongoose');
app.use(express.json());

const userRouter = require('./routers/users');

app.use((req,res, next)=>{
    console.log(req.method);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    //middleware
    next();
})

app.use(userRouter)

app.use(express.static(publicPath));

app.get('*', (req,res, next)=>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

module.exports = app