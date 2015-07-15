
angular.module('starter.services', [])

.factory('CalculateService', function($http, $rootScope) {
var url = 'http://tiy-fee-rest.herokuapp.com/collections/billsplitr2';
var getBills = function() {
  return $http.get(url).then(function(data) {
    return data;
  })
};
var post = function() {
   return $http.post(url, newData)
};

var deleteBill = function(id) {
  $http.delete(url + '/' + id).success(function() {
    console.log('i am in deletebill');
    $rootScope.$broadcast('bill:deleted');
  })

};

  return {
    post: post,
    getBills: getBills,
    deleteBill: deleteBill
  }

});
