(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = [];
function UserService() {
  var service = this;
  service.registeredUser;

  service.saveUser = function(user) {
    service.registeredUser = user;

    console.log("UserService", service.registeredUser);
  };

}

})();
