'use strict';
angular.module('weatherAppDev', ['weatherApp', 'ngMockE2E'])
    .run(function ($httpBackend) {

       /* $httpBackend.whenJSONP('http://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&q=Oslo&callback=JSON_CALLBACK').respond(window.find_result_Oslo);

        $httpBackend.whenPOST('/weather$').respond(function (method, url, data, headers) {
            if (angular.fromJson(data).weather.wind === 100) {
                return ['500', '', ''];
            } else {
                return ['200', window.weatherResult_Oslo, ''];
            }
        });*/


        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenJSONP(/.*/).passThrough();
    })
;