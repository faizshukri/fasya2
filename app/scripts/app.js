'use strict';

angular
  .module('fasyaApp', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/our-story', {
        templateUrl: 'views/our-story.html',
        controller: 'MainCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  }]);
