/**
 * Created by Aleksandar on 10/25/13.
 */
lunchApp.controller('OrderCtrl', function ($scope, Order) {

    /**
     * The order items are instantly updated via the Order service
     * @type {items|*}
     */
    $scope.orderItems = Order.items;

});