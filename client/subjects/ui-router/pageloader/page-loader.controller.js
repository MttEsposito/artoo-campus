angular.module('artoo').controller('PageLoaderCtrl',function($scope){
    $scope.$on('$stateChangeStart',function(){
        $scope.loading=true;
    });
     $scope.$on('$stateChangeSuccess',function(){
        $scope.loading=false;
    });
});