var newData = {};

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $auth, CalculateService, $rootScope) {

  CalculateService.getBills().then(function(data) {
    $scope.chats = data.data;

  });

  $scope.clearInput = function() {
      $scope.bill.name = "";
      $scope.bill.amount = "";
      $scope.bill.split = "";
      $scope.testForm.$setPristine();
       };


    $scope.addBill = function(bill) {
      newData.name = bill.name;
      newData.amount = bill.amount;
      newData.split = bill.split;
      bill.amountEach = Math.round((bill.amount / bill.split) * 100) / 100
      newData.amountEach = bill.amountEach;
      $scope.chat = bill;
      CalculateService.post().then(function() {
        $rootScope.$broadcast('items:updated');
      })
    };

    var getBills = function() {
      CalculateService.getBills().then(function(data) {
          console.log(data);
        $scope.chats = data.data;

      });
    };
    $scope.deleteBill = function(id) {
      CalculateService.deleteBill(id);

    };


  $scope.$on('items:updated', getBills);
  $scope.$on('bill:deleted', getBills);

  $scope.isAuthenticated = function () {
    return $auth.isAuthenticated();
  };
  $scope.logout = function () {
    $auth.logout();
  };
  $scope.authenticate = function (provider) {
    $auth.authenticate(provider).then(function() {
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully logged in!'
          });
        })
        .catch(function(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: response.data ? response.data || response.data.message : response
          });

        });
  };
})

.controller('ChatCtrl', function($scope, $auth) {
  $scope.isAuthenticated = function () {
    return $auth.isAuthenticated();
  };
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $auth) {

})

.controller('AccountCtrl', function($scope, $auth) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.isAuthenticated = function () {
    return $auth.isAuthenticated();
  };
  $scope.logout = function () {
    $auth.logout();
  };
});
