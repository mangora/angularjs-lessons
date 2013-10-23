/**
 * Created by Aleksandar on 10/21/13.
 */
lunchApp.service('Restaurants', function () {

    return {
        restaurants: [
            {
                id: 1,
                img: 'http://www.kmn.rs/images/kmn-prodavnice/kmn-prodavnica-3.jpg',
                title: 'KMN',
                address: 'TC Milenijum',
                telephone: '011 328 55 91 '
            },
            {
                id: 2,
                img: 'http://static.panoramio.com/photos/large/64915565.jpg',
                title: 'Restoran Mikan',
                address: 'Maršala Birjuzova 14',
                telephone: '011 328 49 00'
            },
            {
                id: 3,
                img: 'http://www.011info.com/firms/3808/1.jpg',
                title: 'Glumac',
                address: 'Braće Jugovića 64',
                telephone: '011 262 82 48'
            }
        ],
        getAll: function () {
            return this.restaurants;
        },
        getById: function (id) {
            /**
             * A very efficient and good idiom for a 'FOR loop'.
             * Basically, this is me showing off some of the ECMAScript goodies.
             */
            var result = null;
            for (var i = 0, restaurant; restaurant = this.restaurants[i++];) {
                if (restaurant.id == id) result = restaurant;
            }
            return result;
        }
    }
});