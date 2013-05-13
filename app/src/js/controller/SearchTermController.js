'use strict';

angular.module('waSearchTermController', [])

    .controller('SearchTermController', ['$scope', 'SessionStore', '$location', function($scope, SessionStore, $location) {
        // Remove reference so we do not performe a search one every model update
        $scope.search = angular.copy(SessionStore.search);

        $scope.doSearch = function () {

            if($scope.searchForm.$valid){
                SessionStore.search.city = $scope.search.city;

                if($location.path() === '/feedback') {
                    $location.path('/');
                }
            }
        };
    }])
;