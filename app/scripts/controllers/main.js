'use strict';

angular.module('fasyaApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isHome = function(){
        return $location.path() == '/';
    }
  });
