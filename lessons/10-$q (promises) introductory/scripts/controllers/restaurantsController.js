/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.controller('RestaurantsCtrl', function ($scope, $location, Restaurants) {


    /**
     * Not a good way to get restaurants
     * @type {Array}
     */
    $scope.restaurants = [];
    Restaurants.getAllCallback(function (result) {
        $scope.restaurants = result;
        /**
         * Since this is external data not being handled by Angular, but with jQuery
         * we must manually invoke a $digest cycle (to put it simple, a dirty check of data)
         * which will update the variables where there is a change in its data
         *
         * we achieve this using the next line '$scope.$apply();'
         */
        $scope.$apply();
    });

    /**
     * A good way to get restaurants with $q
     * @type {Array}
     */
    $scope.restaurants = Restaurants.getAllPromiseQ();

    /**
     * The best way to get restaurants with $http
     * @type {Array}
     */
    $scope.restaurants = Restaurants.getAllPromiseHttp();

    $scope.showRestaurantDetails = function (restaurant) {
        $location.path('/restaurant/' + restaurant.id);
    };
});