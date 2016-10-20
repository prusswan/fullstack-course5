(function() {
"use strict";

angular.module('common').directive("itemInMenuList", ItemInMenuListDirective);

ItemInMenuListDirective.$inject = ['MenuService', '$filter', '$q'];

function ItemInMenuListDirective(MenuService, $filter, $q){
  return {
    restrict: "A",
    require: "ngModel",

    link: function(scope, element, attributes, ngModel) {
      ngModel.$asyncValidators.itemInMenuList = function(modelValue) {
        if (!modelValue) return $q.resolve();

        return MenuService.getMenuItems().then(function(response) {
          var result = $filter('filter')(response.menu_items, modelValue, true, 'short_name');
          if (result.length < 1) return $q.reject("menu item not found");

          return true;
        });
      }
    }
  };
}

})();
