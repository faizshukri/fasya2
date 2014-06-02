'use strict';

angular
  .module('fasyaApp', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
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
  });
