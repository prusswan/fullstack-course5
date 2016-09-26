(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'founditems.template.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: '$ctrl',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var $ctrl = this;

    $ctrl.remove = function (myIndex) {
      this.onRemove({ index: myIndex });
    };

    $ctrl.$onChanges = function (changeObj) {
      console.log("Changes: ", changeObj);
    }
  }

})();
