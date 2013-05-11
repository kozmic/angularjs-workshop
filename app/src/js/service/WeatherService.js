'use strict';

angular.module('waServices', [])

    .factory('WeatherService', ['$resource', function ($resource) {

        return $resource('http://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&q=:q&callback=:callback',
            { callback: 'JSON_CALLBACK' },
            { query: { method: 'JSONP', isArray: false} }
        );

    }])

;