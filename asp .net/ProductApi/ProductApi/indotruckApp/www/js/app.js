// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers',
    'customer.controllers', 'customer.services',
    'dashboard.controllers', 'dashboard.services',
    'user.controllers', 'user.services',
    'constants'
])

.run(function ($ionicPlatform, $state, $rootScope, AUTH_EVENTS) {

    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl',
        
    })

    .state('login', {
        url: "/login",
        templateUrl: "templates/user/login.html",
        controller: 'LoginController'
        
    })

    .state('registration', {
        url: "/registration",
        templateUrl: "templates/user/registration.html",
        controller: "RegistrationController",
        cache: false,
    })

    .state('app.dashboard', {
        url: "/dashboard",
        views: {
            'menuContent': {
                templateUrl: "templates/dashboard/dashboard.html",
                controller: "DashboardController"
            }
        }
    })

    .state('app.customer', {
        url: "/customer",
        views: {
            'menuContent': {
                templateUrl: "templates/customer/customer.html",
                controller: "CustomerController"
            }
        }
    })
    
    .state('app.detailcustomer', {
        url: "/customer/detail/:customerId",
        views: {
            'menuContent': {
                templateUrl: "templates/customer/detail.html",
                controller: "DetailCustomerController"
            }
        }
    })
    .state('app.createcustomer', {
        url: "/customer/create",
        views: {
            'menuContent': {
                templateUrl: "templates/customer/create.html",
                controller: "CreateCustomerController"
            }
        }
    })
    
    .state('app.createcustomer', {
        url: "/customer/create",
        views: {
            'menuContent': {
                templateUrl: "templates/customer/create.html",
                controller: "CreateCustomerController"
            }
        }
    })

    .state('app.updatecustomer', {
        url: "/customer/update/:customerId",
        views: {
            'menuContent': {
                templateUrl: "templates/customer/update.html",
                controller: "UpdateCustomerController"
            }
        }
    })
    .state('app.search', {
        url: "/search",
        views: {
            'menuContent': {
                templateUrl: "templates/search.html"
            }
        }
    })

    .state('app.browse', {
        url: "/browse",
        views: {
            'menuContent': {
                templateUrl: "templates/browse.html"
            }
        }
    })
      .state('app.playlists', {
          url: "/playlists",
          views: {
              'menuContent': {
                  templateUrl: "templates/playlists.html",
                  controller: 'PlaylistsCtrl'
              }
          }
      })

    .state('app.single', {
        url: "/playlists/:playlistId",
        views: {
            'menuContent': {
                templateUrl: "templates/playlist.html",
                controller: 'PlaylistCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
})
