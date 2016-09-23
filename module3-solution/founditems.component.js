(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .component('foundItems', {
      templateUrl: 'founditems.template.html',
      controller: FoundItemsComponentController,
      bindings: {
        foundItems: '<',
        onRemove: '&'
      }
    });

  FoundItemsComponentController.$inject = ['$element'];
  function FoundItemsComponentController($element) {
    var $ctrl = this;
    // var totalItems;

    // $ctrl.cookiesInList = function () {
    //   for (var i = 0; i < $ctrl.items.length; i++) {
    //     var name = $ctrl.items[i].name;
    //     if (name.toLowerCase().indexOf("cookie") !== -1) {
    //       return true;
    //     }
    //   }

    //   return false;
    // };

    $ctrl.remove = function (myIndex) {
      $ctrl.onRemove({ index: myIndex });
    };

    // $ctrl.$onInit = function () {
    //   totalItems = 0;
    // };

    $ctrl.$onChanges = function (changeObj) {
      console.log("Changes: ", changeObj);
    }

    // $ctrl.$doCheck = function () {
    //   if ($ctrl.items.length !== totalItems) {
    //     console.log("# of items changed. Checking for Cookies!");
    //     totalItems = $ctrl.items.length;
    //     if ($ctrl.cookiesInList()) {
    //       console.log("Oh, NO! COOKIES!!!!!");
    //       var warningElem = $element.find('div.error');
    //       warningElem.slideDown(900);
    //     }
    //     else {
    //       console.log("No cookies here. Move right along!");
    //       var warningElem = $element.find('div.error');
    //       warningElem.slideUp(900);
    //     }
    //   }
    // };
  }

})();
