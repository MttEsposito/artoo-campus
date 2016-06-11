angular.module('artoo').controller('DataInp', function($scope) {
   //  console.log("Funge funge funge");
   $scope.battery={};
   $scope.cell = ['2','3','4','5','6'];
    $scope.setCells=(n)=>{
        let cells=[];
        for(let i=0;i<n;i++)cells.push({voltage:''});
        $scope.battery.cells=cells;
    }
    $scope.crateD = ['5','10','15','20','25','30','35','40','45','50','55','60'];
   // $scope.addList=function(){
   //    $scope.battery.push($scope.battery);
   // }
	
   //	$scope.battery.push({ 'capacity':$scope.capacity});

   
   
   
});