'use strict';

function getItemText(item){
  var itemText = "";
  for (let text of item.text) {
    if(text != null) {
      if(text.includes('Source:')) {
        item.source  = text.substring(text.indexOf(':'), text.length);
      }
      else {
        if(item.name == 'Dawnbringer') {
          console.log(text)
        }
        itemText += " " + text
      }
    }
  }
  item.text = itemText
  return item;
}

angular.module('myApp.items', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {
    templateUrl: 'items/items.html',
    controller: 'ItemsController'
  });
}])

.controller('ItemsController', ['$scope', 'items', 'items_valuable', 'items_magic', function($scope, items, items_valuable, items_magic) {
  $scope.items = []

  items.success(function(data) {
    for (let item of data) {
      item = getItemText(item);
        $scope.items.push(item);
    }
  });
  items_magic.success(function(data) {
    for (let item of data) {
      item.value = '???';
      item = getItemText(item);
        $scope.items.push(item);
    }
  });
  items_valuable.success(function(data) {
    for (let item of data) {
      var itemValue = item.name.substring(0, item.name.indexOf('-')-1);
      item.name = item.name.substring(item.name.indexOf('-')+1, item.name.length);
      item.value = itemValue;
      item = getItemText(item);
      $scope.items.push(item);
    }
  });

}]);
