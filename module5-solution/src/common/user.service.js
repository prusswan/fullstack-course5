(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = [];
function UserService() {
  var service = this;
  service.registeredUser;

  // service.registeredUser = {
  //   first_name: 'saf',
  //   last_name: 'afs',
  //   email: '2332fw@dsfasdfafd',
  //   phone: '2243243',
  //   dish: 'F1'
  // }

  service.saveUser = function(user) {
    service.registeredUser = user;

    console.log("UserService", service.registeredUser);
  };

  service

}

})();
