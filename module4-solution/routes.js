(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/'
      // templateUrl: 'src/shoppinglist/templates/home.template.html'
    })

    // categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.template.html'
      // templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
      // controller: 'MainShoppingListController as mainList',
      // resolve: {
      //   items: ['ShoppingListService', function (ShoppingListService) {
      //     return ShoppingListService.getItems();
      //   }]
      // }
    })

    // items
    .state('items', {
      // url: '/item-detail/{itemId}',
      url: '/items'
      // templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
      // controller: 'ItemDetailController as itemDetail',
      // params: {
      //   itemId: null
      // }
    });

  }

})();
