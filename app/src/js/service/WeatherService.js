weatherApp.factory('WeatherService', ['$resource', function ($resource) {

        return $resource('http://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&q=:q&callback=:callback',
            { q: '@q', callback: 'JSON_CALLBACK'},
            { query: { method: 'JSONP', isArray: false } }
        );

    }])

;