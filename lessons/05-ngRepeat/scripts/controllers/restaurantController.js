/**
 * Created by Aleksandar on 10/17/13.
 */
lunchApp.controller('RestaurantCtrl', function($scope) {

    $scope.restaurants = [
        {
            img: 'http://www.kmn.rs/images/kmn-prodavnice/kmn-prodavnica-3.jpg',
            title: 'KMN (Kameni - Rocky)',
            address: 'TC Milenijum',
            telephone: '011 328 55 91 '
        },
        {
            img: 'http://static.panoramio.com/photos/large/64915565.jpg',
            title: 'Restoran Mikan',
            address: 'Maršala Birjuzova 14',
            telephone: '011 328 49 00'
        },
        {
            img: 'http://www.011info.com/firms/3808/1.jpg',
            title: 'Glumac',
            address: 'Braće Jugovića 64',
            telephone: '011 262 82 48'
        }
    ];
});