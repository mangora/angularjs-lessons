/**
 * Created by Aleksandar on 10/18/13.
 */
lunchApp.controller('RestaurantCtrl', function ($scope, $routeParams, Restaurants) {

    $scope.restaurant = Restaurants.getById($routeParams.id);

});