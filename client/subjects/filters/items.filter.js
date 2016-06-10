angular.module('artoo')
    .filter('price',function(){
     return function (input,currency=true){
         var output=input.toFixed(2);
            return (currency)?output+ 'gold':output;
    };
  })
    
    .filter('availability',function(){
        return function(input){
            return parseInt(input) || 'out-of-stock';
                if(input==='0')return 'out-of-stock';
                return input;
        };
    })
    .filter('races',function(){
        return function(input){
            return input.join(',')+'.';
        
        }
        })
    .filter('suitable',function(PlayetSrv){
        var race=PlayetSrv.get().race;
        return function(input){
            return input.indexOf(race)>-1;
        };
        
    })
    .filter('suitability',function(PlayetSrv){
        var race=PlayetSrv.get().race;
        return function(input,active){
            return (active && input) || input.filter(singleItem=>singleItem.races.indexOf(race)>-1);
            
        };
        
        
    });
    
    
        
