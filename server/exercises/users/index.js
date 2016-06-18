var express=require('express');
var router=express.Router();
var controller=require('./users.controller')();

router.get('/',controller.query );

 

module.exports= {
    router: router,
};