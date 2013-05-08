weatherApp.controller('WeatherController', ['$scope', '$resource', function ($scope, $resource) {

    $scope.heading = 'Awesome weather application';

    $scope.search = { city: 'Oslo' };

    $scope.WeatherService = $resource('http://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&q=:q&callback=:callback',
        { q:'@q', callback:'JSON_CALLBACK'},
        { query: {method: 'JSONP', isArray: false}
    });

    $scope.doSearch = function () {
        $scope.searchResult = $scope.WeatherService.query({ q: $scope.search.city });
    }




}]);