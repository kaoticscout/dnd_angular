'use strict';

angular.module('myApp.photoViewer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos/:id', {
    templateUrl: 'photoViewer/photoViewer.html',
    controller: 'PhotoController'
  });
}])

.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
