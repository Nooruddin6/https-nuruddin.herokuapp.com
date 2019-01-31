//importing express
var exp=require('express');
var app=exp();

const http=require('http');

//import path
var path=require('path');

//import parser
var bodyparser=require('body-parser');

//get our api routes
const api=require('./server/routes/api');

//parsers of postdata
app.use(bodyparser.json());

//point static path to dist
app.use(exp.static(path.join(__dirname,'dist/coursewala')));

//set our api routes
app.use('/api',api)

//catch all other routes and return the indexfile
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/coursewala/index.html'))
});

//get port from environment and store in express
const port=process.env.PORT || '7862';
app.set('port',port)

//create http server
// const server=http.createServer(app);

//listening on provided port on all network interfaces
app.listen(port,()=>{
    console.log('api running on localhost:'+port)
})



// const port=process.env.PORT || '3002';

