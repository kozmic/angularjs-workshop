'use strict';

angular.module('waWeatherService', [])

    .factory('WeatherService', ['$resource', function ($resource) {


//        return $resource('http://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&lat=59.9193233&lon=-10.8166766&callback=:callback',
        return $resource('http://api.openweathermap.org/data/2.5/weather',
            {},
            {
                query: {
                    method: 'JSONP',
                    params: {
                        mode: 'json',
                        units: 'metric',
                        callback: 'JSON_CALLBACK'
                    }
                }
            }
        );

    }])
;