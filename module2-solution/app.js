(function () {
  'use strict';

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsBought = [];
    var itemsToBuy = [
      {name: 'cookies', quantity: 10},
      {name: 'biscuits', quantity: 5},
      {name: 'groundnuts', quantity: 20},
      {name: 'apples', quantity: 25},
      {name: 'cakes', quantity: 10}
    ];

    service.getItemsBought = function() {
      return itemsBought;
    };

    service.getItemsToBuy = function() {
      return itemsToBuy;
    };

    service.buyItem = function(index) {
      var item = angular.copy(itemsToBuy[index]);
      itemsToBuy.splice(index, 1);
      itemsBought.push(item);
    };

  }

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    ctrl.buyItem = function(itemName) {
      ShoppingListCheckOffService.buyItem(itemName);
    };
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  angular.module('ShoppingListCheckOff', [])
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
})();
