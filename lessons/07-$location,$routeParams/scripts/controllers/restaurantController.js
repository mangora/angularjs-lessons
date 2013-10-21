/**
 * Created by Aleksandar on 10/18/13.
 */
lunchApp.controller('RestaurantCtrl', function($scope, $routeParams) {
    /**
     * The $routeParams is a part of 'ngRoute' module.
     * $routeParams is available only when you declare the 'ngRoute' module as a dependency to the app.
     * $routeParams represents an object that contains all $route parameters that are available for a certain route.
     *
     * In our case $routeParams object has a property named 'id' that contains the id of a requested restaurant.
     *
     * @type {$scope.restaurants.id|*|string}
     */
    $scope.myRouteParams = $routeParams.id;
});