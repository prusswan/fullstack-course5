(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'categories.template.html',
      bindings: {
        categories: '<'
      },
      controller: CategoriesComponentController
    });

  // to fully resolve response data
  function CategoriesComponentController() {
    var $ctrl = this;
    $ctrl.categories = $ctrl.categories.data;
  }
})();
