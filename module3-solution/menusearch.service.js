(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com')
    .service('MenuSearchService', MenuSearchService);

  MenuSearchService.$inject = ['$http', 'ApiBasePath', 'filterFilter'];
  function MenuSearchService($http, ApiBasePath, filterFilter) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http.get(ApiBasePath + '/menu_items.json').then(function (response) {
        console.log('searching...', searchTerm);

        var foundItems = filterFilter(response.data['menu_items'], {description: searchTerm});
        console.log("found filter", foundItems);

        return foundItems;
      });

    };
  }

})();
