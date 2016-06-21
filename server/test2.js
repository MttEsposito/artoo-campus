console.log('this file contains mongodb');
var settings=require('./settings');
var mongoose=require('mongoose');
mongoose.Promise=require ('bluebird');
mongoose.connect(settings.mongoUrl,function(){
    console.log('connection to the database successful');
});
var Schema=mongoose.Schema;
var userSchema=new Schema({
    name: String,
    surname: String,
 //   birthday: new Date,
});
userSchema.methods.great=function(name){
    console.log('hello ' +  name + ' from '+this.name);
};
//userSchema.methods.sayAge=function(){
//    var today= new Date();
//    var age=today.getFullYear()- this.birthday.getFullYear();
//    console.log('i am ' + age + ' years old');
//}
var User=mongoose.model('User',userSchema);
var bob=new User({
    name: 'bob doe',
    updateAT: Date,
//    birthday: Date('1990,2,17'),
 
});
console.log(bob.id);
bob.great('anna');
//bob.sayAge();
//bob.save().then(()=>{
 //   console.log('User successfully saved');
//}).catch((err)=>{
//   console.error('Error in saving the user '+ err);
//});
User.findOne({name : 'bob doe'}).exec()
    .then((user)=>{
        console.info(user);
        user.great('mattia');
});

userSchema.pre('save',function(next){
    this.updateAT= new Date();
    next();
})


var express=require('express');
var app=express();

app.listen(3000,function(){
    console.info('My server is up and running');
});