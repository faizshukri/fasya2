'use strict';

angular.module('fasyaApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isHome = function(){
        return $location.path() == '/';
    };

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

  }]);
