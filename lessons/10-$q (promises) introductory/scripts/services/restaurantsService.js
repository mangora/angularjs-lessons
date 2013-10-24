/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.service('Restaurants', function ($http, $q) {

    return {
        /**
         * The old callback way of handling data with AJAX calls (using jQuery)
         * @param callback {Function} - an anonymous function
         *
         * In a callback there is not a RETURN or a THROW
         *
         * Meaning that there are NO guarantees that at least some of the code will be executed.
         */
        getAllCallback: function (callback) {
            $.get('jsons/restaurants.json', function (result) {
                callback(result);
            });
        },
        /**
         * The promise way of handling data with AJAX calls (using jQuery '$.get' and Angular '$q')
         * The main focus of promises is to make your work with asynchronous code pleasant.
         *
         * A promise represents an "Asynchronous Value". It solves the issue of the 'Pyramid of Doom'. Callback Hell.
         *
         * ---------------- Example: -----------------------------
         * Twitter Timeline tweets implemented in a callback way:
         * -------------------------------------------------------
         * getUser('username', function(user) {
         *      getNewTweets(user, function (tweets) {
         *         updateTimeline(tweets);
         *      });
         * });
         * -------------------------------------------------------
         * Twitter Timeline tweets implemented using promises:
         * -------------------------------------------------------
         * getUser('username')
         *      .then(getNewTweets)
         *      .then(updateTimeline);
         * --------------------------------------------------------
         *
         * Promise represents an 'ActionInProgress' object which can be 'resolved' in a 'success'-ful or 'reject'-ed way.
         * @Angular Besides 'then', 'success' and 'reject', from 1.1.5. there is an 'always' way,
         * which holds code that will be executed, nevertheless if the operation wasn't successful.
         *
         * @returns $q promise which will return an Array
         */
        getAllPromiseQ: function () {
            var deferred = $q.defer();
            $.get('jsons/restaurants.json', function (result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        },
        /**
         * The Angular $http way of handling data with AJAX calls (a higher level of handling of the $q)
         * Angular automatically calls the $digest cycle with a $http call
         * @returns $http promise which will return an Array (this is actually a $q promise, but at a higher level)
         */
        getAllPromiseHttp: function () {
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