angular.module('artoo', [
  'appbar',
  'ui.router',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'UI Router', url: 'subjects/ui-router'});
  })
  
  .config(($stateProvider)=>{
    $stateProvider
    .state('home',{
      controller:function(){console.info('im home')},
      template:'<h1>Home</h1>',
      url:'/home',
    })
    .state('items',{
      controller:'ItemsCtrl',
      controllerAs:'ItemsCtrl',
      templateUrl:'subjects/ui-router/contacts/item/items.html',
      url:'/items',
    })
    .state('items-details',{
      controller:'ItemsDetailCtrl',
      controllerAs:'ItemsDetailCtrl',
      templateUrl:'subjects/ui-router/contacts/item/items.html',
      url:'/items/:code',
      resolve:{
        item:function($stateParams,ItemsSrv){
          return ItemsSrv.getDetails($stateParams.code);
        },
      }
    })
    .state('contacts',{
      controller:'ContactsCtrl',
      controllerAs:'ContactsCtrl',
      data:{
        context:'administration',
        color:'red',
      },
      resolve:{
        color: function($timeout){
          return $timeout (function(){
          return 'blue',
          },1500);
       },
     },
      onEnter:function($state,color){
        if(color != 'blue')$state.go('home');
      },
      onExit:function(){
        console.log('On exit function');
      },
      templateUrl:'subjects/ui-router/contacts/contacts.html',
      url:'/contacts',
    })  
    .state('contacts.list',{
      templateUrl:'subjects/ui-router/contacts/list/list.html',
    })
    
    
    
  });
 
