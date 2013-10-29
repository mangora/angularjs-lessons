/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.controller('RestaurantsCtrl', function ($scope, $location, Restaurants) {

    $scope.restaurants = Restaurants.getAll();

    /**
     * showRestaurantDetails
     * @description Loads the requested restaurant details view
     * @param restaurant
     */
    $scope.showRestaurantDetails = function (restaurant) {
        $location.path('/restaurant/' + restaurant.id);
    };
});