angular.module('artoo').filter('YoN', function(){
    return function(input){
        return(input) ? 'Yes':'No';
    }
});