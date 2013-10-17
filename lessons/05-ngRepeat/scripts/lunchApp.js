/**
 * Created by Aleksandar on 10/17/13.
 */
var lunchApp = angular.module('lunchApp', ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/restaurants', {templateUrl: 'views/restaurants.html', controller: 'RestaurantCtrl'})
            .otherwise({redirectTo: '/restaurants'});
});