(function () {
  'use strict';

  angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http']; //, 'ApiBasePath', 'filterFilter'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function() {

    };

    service.getItemsForCategory = function(categoryShortName) {

    };
  }

})();
