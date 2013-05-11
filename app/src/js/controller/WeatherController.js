'use strict';

angular.module('waControllers', [])

    .controller('WeatherController', ['$scope', 'WeatherService', function ($scope, WeatherService) {

            $scope.heading = 'Awesome weather application';

            $scope.search = { city: 'Oslo' };

            $scope.doSearch = function () {
                if($scope.searchForm.$valid){
                    $scope.searchResult = WeatherService.query({ q: $scope.search.city });
//            $scope.searchResult = WeatherService.query();

                }


            }


            if ("geolocation" in navigator) {
                // Fetches location only once, so no support for Superman.
                navigator.geolocation.getCurrentPosition(function (position) {
                    $scope.search.geo = { lat: position.coords.latitude, long: position.coords.longitude };
                });
                $scope.$watch('search.geo', function (newValue, oldValue) {
                    console.log(newValue, oldValue);
                });
            }
        }])
;