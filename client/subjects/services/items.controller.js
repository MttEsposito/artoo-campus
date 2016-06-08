angular.module('artoo').controller('ItemsCtrl',($scope, ItemsSrv )=>{
  $scope.items=ItemsSrv.get();
  $scope.get=ItemsSrv.get;
  $scope.ItemsSrv=ItemsSrv;
});