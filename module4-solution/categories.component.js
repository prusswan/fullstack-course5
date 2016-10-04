(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'categories.template.html',
      bindings: {
        categories: '<'
      }

    });

  // // to fully resolve response data
  // function CategoriesComponentController() {
  //   var $ctrl = this;
  //   // $ctrl.categories = $ctrl.categories.data;
  // }
})();
