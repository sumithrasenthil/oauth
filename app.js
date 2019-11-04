const express =require('express');
const mongoose =require('mongoose');
const authrouters=require('./router/authrouter');
const db=require('./config/keys')
const passportSetup =require('./config/passport');
//setting up app
var app =express();

//set up view engine
app.set('view engine','ejs');

//mongoose Connect
mongoose.connect(db.mongoose.dburl,function (){
    console.log('Mongodb connected....')
}

);
//set up routers
app.use('/auth',authrouters);

//home page router
app.get('/home',function(req,res){
    res.render('home');
})

//server port
app.listen(4300,function(){
    console.log("server start listening to the port 4300");
});