'use strict';
angular.module('weatherAppDev', ['weatherApp', 'ngMockE2E'])
    .run(function ($httpBackend) {

       $httpBackend.whenJSONP('http://api.openweathermap.org/data/2.5/weather?callback=JSON_CALLBACK&mode=json&q=Oslo&units=metric').respond(window.searchResult_today_Oslo);

       $httpBackend.whenJSONP('http://api.openweathermap.org/data/2.5/forecast?callback=JSON_CALLBACK&cnt=1&mode=json&q=Oslo&units=metric').respond(function (method, url, data, headers) {
            // TODO: Regexp out q value, and return error for a specific city.

            return ['200', window.searchResult_week_Oslo, ''];
        });


        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenJSONP(/.*/).passThrough();
    })
;