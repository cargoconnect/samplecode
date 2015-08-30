angular.module('user.controllers', [])

.controller('RegistrationController', function ($window, $scope, $ionicModal, $timeout, $state) {
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    }
    var uuid = guid();
    $scope.doRegister = function (user) {
        var ref = new Firebase("https://spalo.firebaseio.com/");
        var usersRef = ref.child("users");
        var latestReg = usersRef.child(uuid);
        latestReg.set({
            email: user.email,
            password: user.password,
        });
        $state.go('login', {}, { reload: true });
    };

})

.controller('LoginController', function ($scope, $window, $ionicModal, $timeout, $state, AUTH_EVENTS) {
    var ob = {};
    $scope.doLogin = function (user) {
        var ref = new Firebase("https://spalo.firebaseio.com/users");
        ref.orderByChild('email').startAt(user.email).endAt(user.email).once('value', function (snap) {
            if(snap != null)
            {
                AUTH_EVENTS.notAuthenticated = false;
                $state.go('app.dashboard', {}, { reload: true });
                console.log(AUTH_EVENTS.notAuthenticated);
            }
        });
    };
})

.controller('UserController', function ($scope, $ionicModal, $timeout) {

    $scope.user = {};
})