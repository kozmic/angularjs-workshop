'use strict';

angular.module('waControllers', [])

    .controller('WeatherController', ['$scope', 'WeatherService', 'SessionStore', function ($scope, WeatherService, SessionStore) {

            $scope.heading = 'Awesome weather application';

            $scope.search = SessionStore.search;

            $scope.doSearch = function () {

                if($scope.searchForm.$valid){

                    SessionStore.search.city = $scope.search.city;
                    $scope.searchResult = WeatherService.query({ q: $scope.search.city });

                }
            };

        }])
;