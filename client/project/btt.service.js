angular.module('artoo').service('BttSrv', function($resource) {
    
    var Batteries = $resource('/api/batteries/:id', {
        id: '@id',
    }, {});
    
    
    this.query = () => {
        return Batteries.query().$promise;
    }
    
    this.create = () => {
        return new Batteries();
    };
    
});