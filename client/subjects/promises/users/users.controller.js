angular.module('artoo').controller('UserCtrl',function($scope,UserSrv){
  $scope.loading=true;
   UserSrv.query().then((data)=>{
       $scope.loading=false;
       $scope.users=data;
   }).catch((err)=>{

       console.error(err);
   });
   $scope.getDetails=(id)=>{
       $scope.loading=true;
    UserSrv.get({id :id}).then((data)=>{
        $scope.loading=false;
       $scope.userDetails=data;
       $scope.user=data;
   
   })
}
$scope.user=UserSrv.create();

$scope.remove=(user)=>{
    
        
    user.$remove({id :user.id}).then((data)=>{
    }).catch();
}
    
$scope.save=(user,form)=>{


    user.createdAt=new Date();
user.$save().then((data)=>{
    $scope.user=UserSrv.create();
    form.$setPristine();
    console.info(data);
}).catch(); 
}
});
