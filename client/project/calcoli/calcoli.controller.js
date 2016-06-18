angular.module('artoo').controller('CalcCtrl', function ($scope, CalcSrv) {
    
    var ris=[];
    $scope.ris=$scope.num.cap/$scope.num.amp;
    console.log(ris);
//   var exprs = $scope.exprs = [];
//   $scope.expr = '3*10|currency';
//   $scope.addExp = function(expr) {
//     exprs.push(expr);
//   };

//   $scope.removeExp = function(index) {
//     exprs.splice(index, 1);
//   };
// }]);
});
 