module.exports=function(options){
   var robotName=options.robot || 'alpha';
    function sayHello(name){
        console.log('Hello'+ name + robotName );
    }
    return{
        name:'MyModule1',
        version:'0.1.0',
   //Public API 
        sayHello: sayHello,
    };
};