'use strict';

angular.module('waSessionStore', [])

    .factory('SessionStore', function() {
        var Session = {
            search: {},
            searchResult: {}
        };

        if ("geolocation" in navigator) {
            // Fetches location only once, so no support for Superman.
            navigator.geolocation.getCurrentPosition(function (position) {
                Session.search.geo = { lat: position.coords.latitude, long: position.coords.longitude };
            });
        }

        return Session;
    })

;