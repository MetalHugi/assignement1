(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";
  $scope.checkIfTooMuch = function () {
    var numberOfItems =  calculateNumberOfItems($scope.lunchItems);

    if(numberOfItems <= 3){
        $scope.message = "Enjoy!";
    }else{
      $scope.message = "Too much!";
    }
  };

  function calculateNumberOfItems(stringToSplit) {
    var arrayOfStrings = stringToSplit.split(',');
    return arrayOfStrings.length;
  }
}
})();
