'use strict';

angular.module('waSessionStore', [])

    .factory('SessionStore', function() {
        var SessionStore = {
            search: {},
            searchResult: {}
        };

        return SessionStore;
    })

;