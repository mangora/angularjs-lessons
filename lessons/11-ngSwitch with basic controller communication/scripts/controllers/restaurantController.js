/**
 * Created by Aleksandar on 10/18/13.
 */
lunchApp.controller('RestaurantCtrl', function ($scope, $routeParams, Restaurants, Order) {

    $scope.restaurant = Restaurants.getById($routeParams.id);

    $scope.orderMeal = function (meal) {
        var mealIndex = Order.items.indexOf(meal);
        if (mealIndex === -1) {
            Order.items.push(meal);
        }

    };
});