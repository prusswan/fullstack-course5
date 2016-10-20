(function () {
"use strict";

angular.module('user')
.controller('UserController', UserController);

UserController.$inject = ['UserService', 'menuItems', 'ApiPath'];
function UserController(UserService, menuItems, ApiPath) {
  var $ctrl = this;
  $ctrl.user = UserService.registeredUser;
  $ctrl.menuItems = menuItems;
  $ctrl.basePath = ApiPath;
}

})();
