/**
 * Created by Aleksandar on 10/18/13.
 */
lunchApp.controller('RestaurantCtrl', function ($scope, $routeParams, Restaurants, Order) {

    $scope.restaurant = Restaurants.getById($routeParams.id);

    /**
     * Function for ordering a meal via Service
     * @param meal
     */
    $scope.orderMeal = function (meal) {
        var mealIndex = Order.items.indexOf(meal);
        if (mealIndex == -1) {
            Order.items.push(meal);
        }
    };

    /**
     * This is an override of the indexOf function, but just for Order.items and only here in the controller
     * Note: Will show a better one when we get to the prototypes
     *
     * @param item
     * @returns {number}
     */
    Order.items.indexOf = function (item) {
        var itemIndex = -1;
        for (var i = 0, orderItem; orderItem = Order.items[i++];) {
            if (orderItem.name == item.name) {
                itemIndex = i;
            }
        }
        return itemIndex;
    }
});