angular.module('waDirectives', [])

    // Delays adding img.src so the browser do not perform a GET request if icon is not set.
    .directive('weatherIcon', function() {
        var weatherUrl = 'http://openweathermap.org/img/w/{{icon}}.png';
        return {
            restrict: 'E',
            template: '<img />',
            replace: true,
            link: function(scope, iElement, iAttrs) {

                iAttrs.$observe('source', function(value) {
                    var weather = scope.$eval(value);

                    if(weather && weather.icon) {
                        var iconUrl = weatherUrl.replace('{{icon}}', weather.icon);
                        iElement.attr('src', iconUrl);
                    }
                });
            }
        }
    })

    // Sets active class on current location link in Boostrap applications:
    .directive('activeTab', ['$location', function(location) {
        return {
            restrict: 'AC',
            link: function(scope, ulElement) {
                var linkElements = $(ulElement).children();
                var links = {};

                linkElements.each(function() {
                    var $li = $(this);
                    var href = $li.find('a').attr('href');

                    if(href && href.length > 0) {
                        var hrefWithoutHashBang = href.substring(1);
                        links[hrefWithoutHashBang] = $li;
                    }
                });

                scope.$watch(function() { return location.path() }, function(newPath) {
                    linkElements.removeClass("active");
                    links[newPath].addClass("active");
                });
            }

        }
    }]);

    ;