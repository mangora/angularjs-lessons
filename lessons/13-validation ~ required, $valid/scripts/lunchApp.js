/**
 * Created by Aleksandar on 10/18/13.
 */
var lunchApp = angular.module('lunchApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/restaurants', {templateUrl: 'views/restaurants.html', controller: 'RestaurantsCtrl'})
            .when('/restaurant/:id', {templateUrl: 'views/restaurant.html', controller: 'RestaurantCtrl'})
        /**
         *  We are adding a new route - '/signup' to our application.
         *  Its name says it all - it will be responsible for user sign up.
         */
            .when('/signup', {templateUrl: 'views/signup.html', controller: 'SignUpCtrl'})
            .otherwise({redirectTo: '/restaurants'});
    });