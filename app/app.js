'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.photos',
  'myApp.photoViewer',
  'myApp.monsters',
  'myApp.monsterViewer',
  'myApp.items',
  'myApp.version'
])
// .
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
