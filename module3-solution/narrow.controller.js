(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.found = [];
    ctrl.searchTerm;
    ctrl.lastSearchTerm;

    ctrl.findItem = function () {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(data){
        ctrl.found = data;
        ctrl.lastSearchTerm = ctrl.searchTerm;
      });
    };

    ctrl.removeItem = function (itemIndex) {
      ctrl.found.splice(itemIndex, 1);
    };
  }

})();
