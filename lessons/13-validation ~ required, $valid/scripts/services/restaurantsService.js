/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.service('Restaurants', function ($http) {

    return {
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