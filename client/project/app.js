angular.module('artoo', [
 'ngMaterial',
 'ui.router',
 ])
 
 .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('battery', {
      controller: 'BattCtrl',
      controllerAs: 'BattCtrl',
      url: '/home',
      templateUrl: 'project/home/home.html'
    })
    
     .state('calcoli', {
     controller:'CalcCtrl',
     controllerAs:'CalcCtrl',
     url: '/calcoli',
     templateUrl: 'project/calcoli/calcoli.html'
    })
    
    .state('fpvrace', {
       controller: 'FpvCtrl',
       controllerAs: 'FpvCtrl',
       url: '/Fpv-racer',
       templateUrl: 'project/Fpv-Racer/Fpv-racer.html'
    })

 
})
 .config(($mdThemingProvider) => {
    
    $mdThemingProvider.theme('default')
    
    .primaryPalette('blue-grey')

    .accentPalette('blue')

    .warnPalette('orange')

    .backgroundPalette('grey');
   
  
  
 });
 
