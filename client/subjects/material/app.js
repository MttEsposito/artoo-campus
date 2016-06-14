angular.module('artoo', [
  'appbar',
  'ngMaterial',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Angular Material', url: 'subjects/material'});
  })
  
  .config(($mdThemingProvider) => {
    
    $mdThemingProvider.theme('default')
    
    .primaryPalette('blue-grey')

    .accentPalette('blue')

    .warnPalette('orange')

    .backgroundPalette('grey');
  });