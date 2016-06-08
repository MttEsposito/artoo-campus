angular.module('artoo').service('playerSrv',function(){
    var player={
        name:'Legolas',
        hp:100,
        exp: 15,
        level:2,
        race:'elf',
    };
    this.die=()=>{
        player.hp=0;
        
    };
    this.get=()=>{
        return player;
    };
    this.isDead=()=>{
        return!(!!player.hp);
    };
    
    this.drinkPotion=()=>{
        if(this.isDead())return;
        var newhp=player.hp+50;
        player.hp=(newhp>100) ? 100 : newhp;
        
        
    };
    this.getStatus=()=>{};
    this.levelUp=()=>{
        player.level+=1;
        player.hp=100;
    };
    this.respwan=()=>{
        if(!this.isDead())return
        player.hp=10;
    };
    
    this.takeHit=(damage)=>{
        var hp=player.hp-damage;
        player.hp=(hp>0)?hp: 0;
    };
    
    this.gainExp=()=>{};
    
    
    
    
});