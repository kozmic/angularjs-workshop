'use strict';

angular.module('waControllers', [])

    .controller('SearchTermController', ['$scope', 'SessionStore', function($scope, SessionStore) {
        // Remove reference so we do not performe a search one every model update
        $scope.search = angular.copy(SessionStore.search);

        $scope.doSearch = function () {

            if($scope.searchForm.$valid){

                SessionStore.search.city = $scope.search.city;
            }
        };
    }])

    .controller('TodayWeatherController', ['$scope', 'SessionStore', 'WeatherService', function ($scope, SessionStore, WeatherService) {

        // Alternatives to watching: Setting weatherResult in a service, on $rootScope or shared with an event.
        // Or refactor so the SearchTermController is a directive with a template that is reused in both templates and set result on parent scope (controller)

        $scope.$watch( function() { return SessionStore.search.city; }, function (updatedCity ) {

            if(updatedCity) {
                $scope.searchResult = WeatherService.today({ q: updatedCity });
            }
        });

    }])

    .controller('WeekWeatherController', ['$scope', 'SessionStore', 'WeatherService', function ($scope, SessionStore, WeatherService) {

        $scope.$watch( function() { return SessionStore.search.city; }, function (updatedCity ) {

            if(updatedCity) {
                $scope.searchResult = WeatherService.week({ q: updatedCity });
            }
        });

    }])
;