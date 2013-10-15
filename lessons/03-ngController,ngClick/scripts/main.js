/**
 * Created by Aleksandar on 10/14/13.
 */

/**
 *  This is how you define your main angular application module
 *  You define it in the following manner:
 *  (1)'call angular' - angular
 *  (2)'define module' - angular.module
 *  first parameter represents the module name
 *  second parameter represents an array of module dependencies
 */
var app = angular.module('mangoraApp', []);

/**
 * This line shows how to define your module controller
 * You define it in the following manner:
 * (1)'call app module' - app
 * (2)'define a controller' - app.controller
 * first parameter represents the name of the controller
 * second parameter represents a function that holds the controller logic
 * The second parameter function can receive multiple parameters that represent some of 'app' module elements and dependencies
 * Will talk about it later
 * In our case there is only the '$scope' parameter, which represents the actual scope of the controller
 */
app.controller('MainCtrl', function($scope) {

    /**
     * This is how you define a variable specifically for this controller, tying it to his scope
     * @type {string}
     */
    $scope.userName = '';

    /**
     * The best way to define a property specifically for this controller, would be to make it as an object
     * @type {Object}
     */
    $scope.user = {name: ''};

    /**
     * This is how you define a function specifically for this controller, tying it to his scope
     * @type {Function}
     */
    $scope.callMe = function () {
      alert("You rang!");
    };
});