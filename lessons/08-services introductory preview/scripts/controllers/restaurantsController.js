/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.controller('RestaurantsCtrl', function ($scope, $location, Restaurants) {

    $scope.restaurants = Restaurants.getAll();

    $scope.showRestaurantDetails = function (restaurant) {
        $location.path('/restaurant/' + restaurant.id);
    };
});