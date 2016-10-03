(function () {
  'use strict';

  angular.module('MenuApp')
    .constant('ApiBasePath', '//davids-restaurant.herokuapp.com')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });

      return response;

      // }).then(function (response) {
      //   return response.data;
      // });

      // return data;
    };

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });

      return response;
    };

  }

})();
