angular.module('artoo').service('PlayetSrv',function(){
    var player={
        name:'Legolas',
        race:'elf',
        
    }
    this.get= () =>{
        return player;
    }
    
    
    
});