/**
 * Created by Aleksandar on 10/16/13.
 */
/**
 * As you can notice, there are three differences in the application module initialization line from the last class.
 * (1) - ['ngRoute'] - The application module initialization line now has a dependency for the ngRoute module
 * Though we have added the script tag for it in the 'fourth.html',
 * we still need to specify it as a dependency in our app module.
 *
 * (2) - config() - The config function represents the function where we define the configuration of our app module
 * Inside the function we define some of the structural behaviours of our application.
 *
 * (3) - $routeProvider - The $routeProvider is a route configuration object. Simply, it handles routes of our app.
 * We gain access to the $routeProvider which we have access to from the ngRoute module.
 */
var app = angular.module('mangoraApp', ['ngRoute'])
    .config(function ($routeProvider){

        /**
         * $routeProvider functions - 'when' and 'otherwise'
         *  'when'      - receives two parameters:
         *                 ~ route path {String}    - represents the actual route behind the # (hash) symbol
         *                 ~ config object {Object} - represents the object where we configure the app properties
         *                      for the specified route path. The object can consist of various properties.
         *                      In our case its 'templateUrl' and 'controller'. In order to construct this view,
         *                      Angular uses the template from the templateUrl and the specified controller.
         *
         *  'otherwise' - its functionality is like the 'default' inside a switch statement.
         *                It receives an {Object} parameter which in our case, has a property 'redirectTo'.
         *                The 'otherwise' statement means that if the current app route does not correspond
         *                to any of our 'when' routes that are defined in our $routeProvider, 'otherwise' will handle it.
         *                In our case the object has a 'redirectTo' property which will redirect the app
         *                to the specified route. Usually its a route you already handle in your application.
         */
        $routeProvider
            .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
            .when('/additional', {templateUrl: 'views/additional.html', controller: 'AdditionalCtrl'})
            .otherwise({redirectTo: '/'});

        /**
         * Note: Two views CAN have a same controller.
         */
});

app.controller('MainCtrl', function($scope) {

    $scope.callMe = function () {
        alert("Main rang!");
    };

});


app.controller('AdditionalCtrl', function($scope) {

    $scope.callMe = function () {
        alert("Additional rang!");
    };

});