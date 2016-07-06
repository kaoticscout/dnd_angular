app.factory('monsters', ['$http', function($http) {
  return $http.get('https://s3-us-west-2.amazonaws.com/melody-s3/data/beastiary/monsterManual.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
