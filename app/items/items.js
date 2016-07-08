'use strict';

angular.module('myApp.items', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {
    templateUrl: 'items/items.html',
    controller: 'ItemsController'
  });
}])

.controller('ItemsController', ['$scope', 'items', function($scope, items) {
  items.success(function(data) {
    $scope.items = data;
  });
}]);
