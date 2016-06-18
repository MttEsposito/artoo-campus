angular.module('artoo').controller('ItemsCtrl',function ($scope,ItemsSrv){
    ItemsSrv.query().then((items)=>{
        console.info(items);
    });
    var newItem=ItemsSrv.create();
    newItem.name='shuriken';
    newItem.$save().then().catch((err)=>{
        console.error(err);
    });
});