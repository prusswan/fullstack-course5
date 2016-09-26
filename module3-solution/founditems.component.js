(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .component('foundItems', {
      templateUrl: 'founditems.template.html',
      controller: FoundItemsComponentController,
      bindings: {
        foundItems: '<',
        onRemove: '&'
      }
    });

  FoundItemsComponentController.$inject = ['$element'];
  function FoundItemsComponentController($element) {
    var $ctrl = this;

    $ctrl.remove = function (myIndex) {
      $ctrl.onRemove({ index: myIndex });
    };

    $ctrl.$onChanges = function (changeObj) {
      console.log("Changes: ", changeObj);
    }
  }

})();
