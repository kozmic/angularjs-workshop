angular.module('waDirectives', [])

    // Delays adding img.src so the browser do not perform a GET request if icon is not set.
    .directive('weatherIcon', function() {
        var weatherUrl = 'http://openweathermap.org/img/w/{{icon}}.png';
        return {
            restrict: 'E',
            template: '<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>',
            replace: true,
            link: function(scope, iElement, iAttrs) {

                iAttrs.$observe('source', function(value) {
                    var weather = scope.$eval(value);

                    if(weather && weather.icon) {
                        var iconUrl = weatherUrl.replace('{{icon}}', weather.icon);

                        var image = new Image();
                        image.onload = function() {
                            
                            iElement.attr('src', iconUrl);
                        };
                        image.src = iconUrl;

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
                    var link = links[newPath];
                    if(link){
                        link.addClass("active");
                    }
                });
            }

        }
    }]);

    ;