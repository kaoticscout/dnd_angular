'use strict';

angular.module('myApp.photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos', {
    templateUrl: 'photos/photos.html',
    controller: 'Photos'
  });
}])

.controller('Photos', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);
