angular.module('waRoutes', [])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'templates/today.html',
                controller: 'TodayController',
                activetab: 'today' // TODO: Refactor to directive
            })

            .when('/week', {
                templateUrl: 'templates/week.html',
                controller: 'WeekController',
                activetab: 'week'
            })

            .when('/feedback', {
                templateUrl: 'templates/feedback.html',
                controller: 'FeedbackController',
                activetab: 'feedback'
            })

            .when('/404', { templateUrl: 'templates/404.html' })

        .otherwise( { redirectTo: '/404' });

        $locationProvider.html5Mode(false);
    })

    .run(function($rootScope, $location){
        $rootScope.menuActive = function(url, exactMatch){
            if (exactMatch){
                return $location.path() == url;
            }
            else {
                return $location.path().indexOf(url) == 0;
            }
        }
    });
;