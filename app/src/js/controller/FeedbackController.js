'use strict';

angular.module('waFeedbackController', [])

    .controller('FeedbackController', ['$scope', function ($scope) {

        $scope.submitFeedback = function() {
            console.log('Submitted: ', $scope.user);
        }

    }])
;