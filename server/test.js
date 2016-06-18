console.log('ciao ciao '+ process.env.NODE_ENV +'enviroment!');
// var myModule=require('./exercises/myModule.js')({robot: 'Emiglio'});
// //console.log(typeof myModule);

// var http=require("http");
// var server=http.createServer(function(req,res){
//     res.write('<h1>Hello world from my first server </h1>');
//     res.end();
// });

// server.listen(8080,'0.0.0.0',function(){
//     console.log('server funge');
// })

var express=require("express");

var app = express();

var users=require('./exercises/users');
app.use('/users',users.router);


app.get('/reverse/:string',function(req,res){
    var input=req.params.string;
    var output=input.split('').reverse().join('');
    res.send(output);
});

app.listen(8080, function () {

 console.log('nice job =)');

});