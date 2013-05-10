weatherApp.controller('WeatherController', ['$scope', 'WeatherService',
    function ($scope, WeatherService) {

    $scope.heading = 'Awesome weather application';

    $scope.search = { city: 'Oslo' };

    $scope.doSearch = function () {

        $scope.searchResult = WeatherService.query({ q: $scope.search.city });
    }

}]);