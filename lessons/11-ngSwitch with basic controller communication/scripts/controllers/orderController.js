/**
 * Created by Aleksandar on 10/25/13.
 */
lunchApp.controller('OrderCtrl', function ($scope, Order) {

    $scope.orderItems = Order.items;

});