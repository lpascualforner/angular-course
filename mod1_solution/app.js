(function () {
'use strict';

angular.module('DishesForLunch', [])
.controller('DishesController', DishesController);

DishesController.$inject = ['$scope', '$filter'];
function DishesController($scope, $filter) {
  $scope.dishes = "";

  $scope.testDishes = function () {
    $scope.messageColor = "green";
    if ($scope.dishes == "") {
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
      return;
    }
    var dishesList = $scope.dishes.split(",");
    // Remove duplicated values
    dishesList = dishesList.filter(function(n) { return n.trim() != "" });
    $scope.message = "Enjoy!";
    if (dishesList.length > 3) {
      $scope.message = "Too much!";
    }
  };
}

})();
