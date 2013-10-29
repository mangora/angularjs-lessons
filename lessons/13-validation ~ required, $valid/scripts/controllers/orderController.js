/**
 * Created by Aleksandar on 10/25/13.
 */
lunchApp.controller('OrderCtrl', function ($scope, Order) {

    $scope.orderItems = Order.items;
    $scope.orderTotal = 0;
    $scope.orderDiscount = 0;

    /**
     * calculateOrderTotal
     * @description Computes the ordered items prices and applies the appropriate discount.
     */
    var calculateOrderTotal = function () {
        var total = 0;
        for (var i = 0, item; item = Order.items[i++];) {
            total += Number(item.price);
        }
        $scope.orderTotal = total;
        $scope.orderDiscount = $scope.orderTotal > 600 ? 10 : 0;
    };

    $scope.$watchCollection('orderItems', calculateOrderTotal, false);
});