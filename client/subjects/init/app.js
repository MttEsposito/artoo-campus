// define app module
var app=angular
.module('artooinit',[])
.run(function(){
    console.info('ilprimo info1');
});
//.config()
angular
.module('artooinit')
.run(function(){
      console.info('my module bla bla bla');
//})
//.run(() =>{
 // console.info('my module bla bla bla');
});
// define a run function
app.run(function(){
    console.info('blablabla 2');
});