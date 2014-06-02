'use strict';

angular.module('fasyaApp')
  .factory('Utility', ['$location', function ($location) {

    // Public API here
    return {
        isActive: function (viewLocation){ 
            return viewLocation === $location.path();
        }
    };
  }]);
