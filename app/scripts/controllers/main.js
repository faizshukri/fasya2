'use strict';

angular.module('fasyaApp')
    .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.isHome = function(){
            return $location.path() === '/';
        };
        
    }]);
