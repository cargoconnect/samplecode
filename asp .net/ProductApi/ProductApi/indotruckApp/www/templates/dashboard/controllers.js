angular.module('dashboard.controllers', [])

.controller('DashboardController', function ($scope, $http, AUTH_EVENTS) {
    $http.get("http://localhost:62827/api/product")
        .success(function (data, status, header, config) {
            console.log(AUTH_EVENTS.notAuthenticated);
        })
        .error(function (data, status, header, config) {
            alert("error");
        })
});