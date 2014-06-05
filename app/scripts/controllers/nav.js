'use strict';

angular.module('fasyaApp')
    .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };

        $scope.init = function(){
            var collapse = angular.element('.navbar-collapse');
            collapse.delegate('li a', 'click', function(e){
                if(collapse.hasClass('in')) collapse.collapse('toggle');
            });
        }

        $scope.init();

    }]);
