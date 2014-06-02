'use strict';

angular.module('fasyaApp')
    .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };

    }]);
