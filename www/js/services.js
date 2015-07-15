
angular.module('starter.services', [])

.factory('CalculateService', function($http) {
var url = 'http://tiy-fee-rest.herokuapp.com/collections/billsplitr2';
var getBills = function() {
  return $http.get(url).then(function(data) {
    return data;
  })
};
var post = function() {
   return $http.post(url, newData)
};



  return {
    post: post,
    getBills: getBills
  }

});
