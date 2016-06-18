angular.module('artoo').controller('ContactsCtrl',function($state,color){
    this.color = $state.current.data.color ; // access color in state data
    console.log($state.current);
    this.resolveColor=color;
});