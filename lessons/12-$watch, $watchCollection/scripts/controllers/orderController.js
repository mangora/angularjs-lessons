/**
 * Created by Aleksandar on 10/25/13.
 */
lunchApp.controller('OrderCtrl', function ($scope, Order) {

    /**
     * The order items are instantly updated via the Order service
     * @type {items|*}
     */
    $scope.orderItems = Order.items;
    $scope.orderTotal = 0;
    $scope.orderDiscount = 0;

    /**
     * orderTotal function that computes (!) the ordered items prices and the appropriate discount
     *
     * @returns {number}
     */
    var calculateOrderTotal = function () {
        var total = 0;
        for (var i = 0, item; item = Order.items[i++];) {
            total += Number(item.price);
        }
        $scope.orderTotal = total;
        $scope.orderDiscount = $scope.orderTotal > 600 ? 10 : 0;
    };

    /**
     * $watch represents observing an object for any change that may happen
     *
     * @params are consisted of:
     *      - $scope object {String} - represents an object we want to watch (check if there are any impending changes),
     *      - function  {Function} - a function to call when the watched object values change,
     *      - deepWatch {Boolean} - represents an boolean if we want to have a deep watch for a change in objects,
     *                              that are consisting the object we are watching
     *
     * Note: In order to watch arrays in Angular we will need to set the 'deepWatch' parameter to 'true'.
     *       We do that because we also want to watch if the order items values change as well.
     */
    $scope.$watch('orderItems', calculateOrderTotal, true);

    /**
     * As mentioned before, in order to watch arrays in Angular we will need to set the 'deepWatch' parameter to 'true'
     * OR we can use a module function specialized in watching arrays ~ '$watchCollection'
     */
    //$scope.$watchCollection('orderItems', calculateOrderTotal, false);
});