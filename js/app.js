(function(){
  'use strict';

  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope) {
    $scope.lunchMessage = "";
    $scope.init = false;

    $scope.keyUp = function() {
      if (typeof $scope.lunchItems === 'undefined' || $scope.lunchItems.length == 0)  {
        $scope.init = false;
        $scope.lunchMessage = "";
      }
    }

    $scope.checkIfTooMuch = function () {
      $scope.init = true;

      var lunchItemCount = calculateLunchItems($scope.lunchItems);
      $scope.flagger = 1;
      if (lunchItemCount == 0) {
        $scope.lunchMessage = "Please enter data first";
        $scope.flagger = 0;
      }
      else if (lunchItemCount > 0 && lunchItemCount <= 3) {
        $scope.lunchMessage = "Enjoy!";
        $scope.flagger = 1;
      }
      else {
        $scope.lunchMessage = "Too Much!";
        $scope.flagger = 2;
      }
    };

    //ng-model already performs trimming - no need to perform additional trimming
    function calculateLunchItems(items) {
      if (typeof items === 'undefined') {
        return 0;
      }
      var totalItemsArray = items.split(',');
      var itemCount = 0;
      for (var idx = 0; idx < totalItemsArray.length; idx++) {
        if (totalItemsArray[idx].trim().length > 0) {
          itemCount++;
        }
      }
      return itemCount;
    }

  }
})();
