'use strict';

angular.module('waWeekController', [])

    .controller('WeekController', ['$scope', 'SessionStore', 'WeatherService', function ($scope, SessionStore, WeatherService) {
        // Alternatives to watching: Setting weatherResult in a service, on $rootScope or shared with an event.
        // Or refactor so the SearchTermController is a directive with a template that is reused in both templates and set result on parent scope (controller)

        $scope.$watch( function() { return SessionStore.search.city; }, function (updatedCity ) {
            if(updatedCity) {
                $scope.searchResult = WeatherService.week({ q: updatedCity });
            }
        });

    }])
;