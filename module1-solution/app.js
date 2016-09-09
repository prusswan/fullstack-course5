(function () {
  'use strict';

  function LunchCheckController($scope) {
    var ctrl = this;

    ctrl.dishes = [];
    ctrl.message = '';

    ctrl.checkDishes = function() {
      if (ctrl.dishes.length < 1) {
        ctrl.message = 'Please enter data first';
      } else if (ctrl.dishes.length <= 3) {
        ctrl.message = 'Enjoy!';
      } else {
        ctrl.message = 'Too much!';
      }
      // console.log("dishes!", ctrl.dishes);
    }
  }

  LunchCheckController.$inject = ['$scope'];

  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
})();
