/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.controller('MessageCtrl', function($scope, $routeParams) {

    $scope.myMessage = $routeParams.text;
});