/**
 * Created by Aleksandar on 10/18/13.
 */
lunchApp.controller('RestaurantCtrl', function ($scope, $routeParams, Restaurants, Order) {

    $scope.restaurant = Restaurants.getById($routeParams.id);

    /**
     * @description Checking up if the meal is already on the order
     *              and then adding to the order via Order service.
     * @param meal
     */
    $scope.orderMeal = function (meal) {
        var mealIndex = Order.items.indexOf(meal);
        if (mealIndex == -1) {
            Order.items.push(meal);
        }
    };

    /**
     * @description This is an override of the indexOf function just for Order.items and only here in this controller.
     *
     * Note: Will show a proper one when we get to the prototypes in the following lessons.
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