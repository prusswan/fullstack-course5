(function () {
"use strict";

angular.module('public')
.controller('HomeController', HomeController);

HomeController.$inject = ['UserService'];
function HomeController(UserService) {
  var $ctrl = this;

  $ctrl.user;
  $ctrl.message;

  $ctrl.register = function(userForm) {
    if (userForm.$valid) {
      UserService.saveUser($ctrl.user);

      userForm.$setPristine();
      userForm.$setUntouched();
      $ctrl.user = {};

      $ctrl.message = {
        status: "success",
        content: "Your information has been saved."
      }
    }
  };
}

})();
