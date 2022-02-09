var app = angular.module('myApp', []);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'aboutus.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'manipulate.html',
        controller: 'SecondController'
    })

    .when('/mechanicdata', {
        templateUrl: 'mechanicdata.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = ' IGNITE pride ourselves on delivering the highest quality of vehicle tuning, maintenance, repairs and installation of performance parts for our customers.Based in Aberdeen, Scotland, We have invested heavily in our business in key area’s such as high level training, advanced software, latest technology tuning tools and workshop equipment. This has provided our team with all the correct tools, understanding and knowledge together with our experience to succeed in our work at the very highest standard possible.IGNITE has been set up to offer the best service and advice on vehicle performance, be it for more power or more economy we have it covered.We have our own Dyno Developments rolling road, custom in house map writing. We also have the latest diagnostic equipment and techniques at our disposal. With these tools and techniques we can provide customers with the best tuning and servicing solutions available to suit their individual requirements.';
});

app.controller('SecondController', function($scope) {
    $scope.message = 'Hello from SecondController';
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://pavankumark2410.github.io/FInd-My-Mechanic-JSON/getMechanics.json')
        .success(function(response) {
            $scope.names = response.mechanic;
            $scope.rowlimit = 6;
        });
});