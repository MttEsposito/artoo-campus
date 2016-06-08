angular.module('artoo').controller('PlayerCtrl',($scope)=>{
    $scope.player={
        name:'Legolas',
        hp:100,
        exp:17,
        level:2,
        race:'elf',
    };
    $scope.isDead= () => {
        return ($scope.player.hp)? 'no' : 'yes' ;
    };
//take damage
    $scope.tDamage = (damage) => {
        $scope.player.hp = ($scope.player.hp<damage) ? 0 : $scope.player.hp - damage ; 
        
    };
    $scope.levelUp=()=>{
        $scope.player.level +=1;
        $scope.player.exp=0;
    };
    $scope.gainExp=(exp)=>{
        var totalExp=$scope.player.exp += exp;
 
        if(( totalExp) >= 100){
             totalExp=totalExp-100;
             $scope.levelUp();
             $scope.player.hp=100;
        }
        $scope.player.exp= totalExp;
    };




//level up
//gain exp

});