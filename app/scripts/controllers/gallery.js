'use strict';

angular.module('fasyaApp')
    .controller('GalleryCtrl', ['$scope', '$timeout', 'Restangular', '$firebase', function ($scope, $timeout, Restangular, $firebase) {

        var firebaseUrl = "https://fasya.firebaseio.com/gallery";
        
        var baseAccounts = Restangular.allUrl('firebase', firebaseUrl+'.json');

        baseAccounts.getList().then(function(images){
            $scope.images = images;

            $timeout(function(){
                $("#slides2").zoomflow({
                    settings_slideshowTime: 5,
                    design_padding: 150
                });
            });
        });
    }]);