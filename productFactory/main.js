var app = angular.module('app',[]);

app.controller('itemController', function ($scope, itemFactory){
    $scope.newItem = {};
    $scope.items = itemFactory.items;
    
    function setItems(){
        $scope.items = itemFactory.items;
        $scope.newItem = {};
    }

    $scope.addItem = function(){
        itemFactory.addItem($scope.newItem, function(){
            setItems();
        });
    }
    $scope.deleteItem = function(id){
        itemFactory.deleteItem(id, setItems);
    }
});

app.controller('orderController', function($scope, itemFactory){
    $scope.orders = itemFactory.items;

    function setOrders(){
        $scope.orders = itemFactory.items;
    }
    $scope.buy = function(item, setOrders){
        itemFactory.buy(item);
        setOrders();
    }

})

app.factory("itemFactory", ['$http', function($http){
    var theFactory = {};
    theFactory.items = [
        {name: 'Keyboard', price: 12.99, qty: 50},
        {name: 'Pizza', price: 7.99, qty: 36}
    ];
    theFactory.addItem = function(newItem, callback){
        console.log("addItem() in teh factory reached!");
        console.log(newItem.name);
        console.log(newItem.price);
        newItem.qty = 50;
        theFactory.items.push(newItem);
        console.log(theFactory.items);
        callback(theFactory.items);
    }
    theFactory.deleteItem = function(id, callback){
        theFactory.items.splice(id,1);
        callback(theFactory.items)
    }
    theFactory.buy = function(item){
        if(item.qty>0){
            item.qty--;
        }
    }
    return theFactory;
}])