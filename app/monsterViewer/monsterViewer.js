'use strict';

var monsterDict = new Array();

angular.module('myApp.monsterViewer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monsters/:name', {
    templateUrl: 'monsterViewer/monsterViewer.html',
    controller: 'MonsterController'
  });
}])

.controller('MonsterController', ['$scope', 'monsters', '$routeParams', function($scope, monsters, $routeParams) {
  monsters.success(function(data) {

    var count = 0;
    for (var monster of data) {
      monsterDict[monster['name']] = count;
      count = count + 1;
    }

    $scope.detail = data[monsterDict[$routeParams.name]];
    $scope.traits = data[monsterDict[$routeParams.name]]['trait'];
    $scope.actions = data[monsterDict[$routeParams.name]]['action'];
  });
}]);
