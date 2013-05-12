'use strict';

angular.module('waWeatherService', [])

    .factory('WeatherService', ['$resource', function ($resource) {

        return $resource('http://api.openweathermap.org/data/2.5/:action',
            {},
            {
                today: {
                    method: 'JSONP',
                    params: {
                        action: 'weather',
                        mode: 'json',
                        units: 'metric',
                        callback: 'JSON_CALLBACK'
                    }
                },
                week:  {
                    method: 'JSONP',
                    params: {
                        action: 'forecast/daily',
                        cnt: 7,
                        mode: 'json',
                        units: 'metric',
                        callback: 'JSON_CALLBACK'
                    }
                }
            }
        );
    }])
;