/**
 * Created by Aleksandar on 10/18/13.
 */
var lunchApp = angular.module('lunchApp', ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/restaurants', {templateUrl: 'views/restaurants.html', controller: 'RestaurantsCtrl'})
            .when('/restaurant/:id', {templateUrl: 'views/restaurant.html', controller: 'RestaurantCtrl'})
            .when('/message/:text', {templateUrl: 'views/message.html', controller: 'MessageCtrl'})
            .otherwise({redirectTo: '/restaurants'});
    });