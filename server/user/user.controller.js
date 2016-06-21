module.exports=function(){
    var User=require('./users.model');
     function create(req,res){
        var newUser=new User(req.body);
        newUser.save()
        .then(()=>{
          res.status(201).send('user created');  
        })
        .catch(err=>res.status(500).send('user not created'));
         
     }
    
    function query(req,res){
        User.find().exec()
        .then((users)=>{
        res.status(200).json(users);
            
        })
        .catch((err)=>{
          res.status(500).send('cant read user from db');  
        });
    }
    function remove(req,res){
        User.remove({name:req.params.name})
        .then(()=>res.status(200).send('eliminate'))
        .catch(err=>res.status(500).send('cant remove'));
    }
    function update(req,res){
        User.findByIdandUpdate(req.params.id, req.body)
        .then(()=>res.status(200).send('updated'))
        .catch(err=>res.status(500).send('cant updated'));
    }
    return{
        create: create,
        query: query,
        remove: remove,
        update:update,
    }
}