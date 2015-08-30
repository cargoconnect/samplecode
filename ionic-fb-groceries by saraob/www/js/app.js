// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

.factory('Items', ['$firebaseArray', function($firebaseArray) {
  //var itemsRef = new Firebase('https://ionic-fb-demo.firebaseio.com/items');
  var itemsRef = new Firebase('https://amber-inferno-7387.firebaseio.com/');
  return $firebaseArray(itemsRef);
}]) 

.controller('ListCtrl', function($scope, $ionicListDelegate, Items) {

  $scope.items = Items;

  // Function to add something to list
  $scope.addItem = function() {
    var name = prompt('What do you need to buy?');
    if (name) {
      $scope.items.$add({
        'name': name
      });
    }
  };

  // Function when checklist is pressed
  $scope.purchaseItem = function(item) {
    var itemRef = new Firebase('https://amber-inferno-7387.firebaseio.com/' + item.$id + '/status');

    //getting data and condition check
    itemRef.once("value",function($data){
      if ($data.val() == null) {
        itemRef.set('purchased'); 
      } else {
        itemRef.remove();
      }
      $ionicListDelegate.closeOptionButtons();
    });
      
  };
});
