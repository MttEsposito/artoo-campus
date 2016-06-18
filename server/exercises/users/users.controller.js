module.exports=function(){
    function query(req,res){
        res.send([{name:'Mattia',email: 'mattia@mattiamail.it'}]);
    }

    return{
        query:query,
    };
};
