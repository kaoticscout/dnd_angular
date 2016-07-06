'use strict';

angular.module('myApp.monsterViewer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monsters/:id', {
    templateUrl: 'monsterViewer/monsterViewer.html',
    controller: 'MonsterController'
  });
}])

.controller('MonsterController', ['$scope', 'monsters', '$routeParams', function($scope, monsters, $routeParams) {
  monsters.success(function(data) {
    $scope.detail = data[$routeParams.id];
    $scope.traits = data[$routeParams.id]['trait'];
    $scope.actions = data[$routeParams.id]['action'];
  });
}]);
