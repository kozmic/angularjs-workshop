weatherApp.controller('WeatherController', ['$scope', function($scope) {

    $scope.heading = 'Awesome weather application';

    $scope.search = { city: 'Oslo' };

}]);