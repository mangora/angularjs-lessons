/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.service('Restaurants', function ($http) {

    return {
        /**
         * $http ~ represents one of the core modules in Angular.js responsible for handling HTTP requests
         *         Besides '$http.get' method it also the following ones:
         *              - $http.post
         *              - $http.head
         *              - $http.put
         *              - $http.delete
         *              - $http.jsonp
         *
         *  Each of those methods is is equal to
         *      $http({method: 'METHOD', url: 'someUrl'})
         *
         *  In our case it could be written as
         *      $http({method: 'GET', url: 'jsons/restaurants.json'})
         *
         */
        getAll: function () {
            return $http.get('jsons/restaurants.json').then(function (response) {
                return response.data;
            });
        },
        getById: function (id) {
            return $http.get('jsons/restaurants.json').then(function (response) {
                var restaurants = response.data;
                var result = null;
                for (var i = 0, restaurant; restaurant = restaurants[i++];) {
                    if (restaurant.id == id) result = restaurant;
                }
                return result;
            });
        }
    }
});