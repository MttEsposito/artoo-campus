angular.module('artoo').controller('RedditCtrl',function($scope,RedditSrv){


$scope.$watch('search',(newValue)=>{
    RedditSrv.query(newValue).then((data)=>{
        console.log(data);
        $scope.reddits=data.data && data.data.children;
        
    }).catch();

},true);
});

// $scope.query=(search)=>{




//     RedditSrv.query(search).then((data)=>{
//         $scope.reddits=data.data.children;
//     }).catch();
// }
// });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
