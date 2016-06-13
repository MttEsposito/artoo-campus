angular.module('artoo').controller('DataInp', function($scope,BttSrv) {
   //  console.log("Funge funge funge");
   $scope.BttSrv=BttSrv;
   $scope.battery={};
   $scope.cell = ['2','3','4','5','6'];
    $scope.setCells=(n)=>{
        let cells=[];
        for(let i=0;i<n;i++)cells.push({voltage:''});
        $scope.battery.cells=cells;
    }
    $scope.crateD = ['5c','10c','15c','20c','25c','30c','35c','40c','45c','50c','55c','60c'];
  
   $scope.add = (battery) => {
     
       if (!battery.id) $scope.battery = {};
       
       BttSrv.add(battery);
    };
    $scope.selectBattery = (battery) =>{
        $scope.battery = (battery && angular.copy(battery)) || {};
    }

   
});