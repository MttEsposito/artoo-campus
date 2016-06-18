angular.module('artoo').service('UserSrv',function($resource){
    var User=$resource('http://jsonplaceholder.typicode.com/users/:id',{
        //contiene valori default le prime {}
    
    },{
        //consente di creare metodi alternativi
    });
    this.create=() =>{
        return new User();
    };
    this.get=(params)=>{
        return User.get(params).$promise;
    };
    this.query=()=>{
        return User.query().$promise;
    };
});