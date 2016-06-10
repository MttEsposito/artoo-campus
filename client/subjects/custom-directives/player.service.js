angular.module('artoo').service('PlayerSrv',function(){
    var dictionary={
        fight:'the player started a fight',
        potion:'drink potion',
    };
    var logs=['Logs inited'];
    this.log=(code)=>{
        var log=dictionary[code] || 'unknown moves';
        var date=new Date();
        log.push({text: text, date: date});
    };
    this.getLogs=()=>{
        return logs;
    };
    
    
});
    