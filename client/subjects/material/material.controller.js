angular.module('artoo').controller('MaterialCtrl',function($scope){
    
$scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };
});