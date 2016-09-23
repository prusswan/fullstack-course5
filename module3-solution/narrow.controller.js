(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.found = [];
    ctrl.searchTerm = "";

    ctrl.findItem = function () {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(data){
        ctrl.found = data;
      });
    };
  }

})();
