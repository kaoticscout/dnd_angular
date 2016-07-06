'use strict';

angular.module('myApp.monsters', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monsters', {
    templateUrl: 'monsters/monsters.html',
    controller: 'MonsterViewer'
  });
}])

.controller('MonsterViewer', ['$scope', 'monsters', function($scope, monsters) {
  monsters.success(function(data) {
    $scope.monsters = data;
  });
}]);
