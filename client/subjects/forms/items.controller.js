angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemSrv) {
    $scope.ItemSrv = ItemSrv;
   
    $scope.selectItem=(code)=>{
        $scope.item=angular.copy(ItemSrv.find(code));
    };
  //  $scope.selectedItem=ItemSrv.get()[0].code;
  //  $scope.selectItem($scope.selectedItem);
    $scope.insert = function(item, form) {
        ItemSrv.add(item);
        $scope.item = {};
        $scope.resetForm(form);
    };
    $scope.update=(item,form)=>
        ItemSrv.update(item);



    $scope.resetForm = (form) => {
       
  //      $scope.item = {};
  //      form.$setPristine()
    };
});