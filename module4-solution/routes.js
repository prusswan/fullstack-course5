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
      templateUrl: 'categories.html',
      controller: 'CategoriesController as list',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
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
