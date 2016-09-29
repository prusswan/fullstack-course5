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
    ctrl.notFound;

    ctrl.findItem = function () {
      if (!ctrl.searchTerm || ctrl.searchTerm.trim().length == 0) {
        ctrl.notFound = true;
        ctrl.lastSearchTerm = "";
        return;
      };

      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(data){
        ctrl.found = data;
        ctrl.notFound = data.length == 0;
        ctrl.lastSearchTerm = ctrl.searchTerm;
      });
    };

    ctrl.removeItem = function (itemIndex) {
      ctrl.found.splice(itemIndex, 1);
    };
  }

})();
