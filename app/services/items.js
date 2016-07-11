app.factory('items', ['$http', function($http) {
  return $http.get('https://s3-us-west-2.amazonaws.com/melody-s3/data/items/mundane_items.json')
     .success(function(data) {
       return data;
     })
     .error(function(data) {
       return data;
     });
}]);
app.factory('items_magic', ['$http', function($http) {
  return $http.get('https://s3-us-west-2.amazonaws.com/melody-s3/data/items/magic_items.json')
     .success(function(data) {
       return data;
     })
     .error(function(data) {
       return data;
     });
}]);
app.factory('items_valuable', ['$http', function($http) {
  return $http.get('https://s3-us-west-2.amazonaws.com/melody-s3/data/items/valuable_items.json')
     .success(function(data) {
       return data;
     })
     .error(function(data) {
       return data;
     });
}]);
