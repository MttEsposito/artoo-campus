angular.module('artoo', ['ngMaterial',])
 .config(($mdThemingProvider) => {
    
    $mdThemingProvider.theme('default')
    
    .primaryPalette('blue-grey')

    .accentPalette('blue')

    .warnPalette('orange')

    .backgroundPalette('grey');
  });