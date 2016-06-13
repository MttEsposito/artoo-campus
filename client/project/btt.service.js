angular.module('artoo').service('BttSrv', function() {
    var batteries = [];
    
    this.add = (battery) => {
        if (battery.id) {
            batteries.forEach((singleBattery) => {
                if (singleBattery.id === battery.id) {
                    singleBattery.capacity=battery.capacity;
                    singleBattery.nCell=battery.nCell;
                    singleBattery.cells=battery.cells;
                    singleBattery.cRate=battery.cRate;
                    singleBattery.cd=battery.cd;
                    singleBattery.resistence=battery.resistence;
                };
            });
       //     console.log(battery, batteries);
            return;
        }
        
        battery.id=batteries.length+1;
        batteries.push(battery);
        
    };
    this.get = (battery) => {
        return  batteries;
    }
    this.remove = (battery) =>{
        
    }
 
        
    
});