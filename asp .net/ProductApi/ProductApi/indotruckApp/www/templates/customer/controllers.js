angular.module('customer.controllers', [])

.controller('CustomerController', function ($scope, $ionicModal, $timeout) {

    $scope.customers = [];

    $ionicModal.fromTemplateUrl('templates/modal/create.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.create = function () {
        $scope.modal.show();
    };

    $scope.closeCreate = function () {
        $scope.modal.hide();
    };
})

.controller('CustomerController', function ($scope, $ionicModal, $timeout) {

    $scope.customer = {};

    $ionicModal.fromTemplateUrl('templates/modal/edit.html', {
        scope: $scope
    }).then(function () {
        $scope.modal = modal;
    });
 })

.controller('CreateCustomerController', function ($scope, $ionicModal, $timeout, $state) {

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

    $scope.doCreateCustomer = function (customer) {
        var ref = new Firebase("https://spalo.firebaseio.com/");
        var newCustomer = ref.child("customers").child(uuid);
        newCustomer.set({
            name: customer.name,
            address: customer.password,
            phone: customer.phone,
            email: customer.email,
        });
        $state.go('app.createcustomer', {}, { reload: true });
    };
})

.controller('UpdateController', function ($state, $scope, $ionicModal, $timeout, $stateParams) {
    $scope.doUpdateCustomer = function (customer) {
        var ref = new Firebase("https://spalo.firebaseio.com/");
        var updateCustomer = ref.child("customers").child($stateParams.customerId);
        updateCustomer.set({
            name: customer.name,
            address: customer.password,
            phone: customer.phone,
            email: customer.email,
        });
        $state.go('app.updatecustomer', {}, { reload: true });
    };
})