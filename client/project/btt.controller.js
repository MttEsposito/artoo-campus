angular.module('artoo').controller('BattCtrl', function($scope,BttSrv) {
   //  console.log("Funge funge funge");
   
   BttSrv.query()
    .then(data => $scope.batteries = data)
    .catch(err => console.error(err));
   
   $scope.BttSrv = BttSrv;
   
   $scope.battery = BttSrv.create();
   
   $scope.cell = ['2','3','4','5','6'];
    $scope.setCells=(n)=>{
        let cells=[];
        for(let i=0;i<n;i++)cells.push({voltage:''});
        $scope.battery.cells=cells;
    }
    $scope.crateD = ['5c','10c','15c','20c','25c','30c','35c','40c','45c','50c','55c','60c'];
  
   $scope.add = (battery) => {
       battery.$save()
           .then(data => BttSrv.query())
           .then(data => $scope.batteries = data);
    };
    
    $scope.selectBattery = (battery) =>{
        $scope.battery = battery || BttSrv.create();
    }
    
    $scope.remove = (battery) => {
        battery.$remove()
            .then(data => BttSrv.query())
            .then(data => $scope.batteries = data);
    }
  
});