'use strict';

angular.module('fasyaApp')
    .controller('GalleryCtrl', ['$scope', '$timeout', 'Restangular', '$firebase', function ($scope, $timeout, Restangular, $firebase) {

        var firebaseUrl = "https://fasya.firebaseio.com/gallery";
        
        var baseAccounts = Restangular.allUrl('firebase', firebaseUrl+'.json');

        $scope.gallery = {};

        baseAccounts.getList().then(function(images){
            $scope.gallery.images = images;

            $scope.gallery.scrolled = false;

            $timeout(function(){
                $("#slides2").zoomflow({
                    settings_slideshowTime: 5,
                    design_padding: 150
                });

                $('#slides2').bind('mousewheel',function(e){
                    if($scope.gallery.scrolled) return false;

                    if(e.originalEvent.wheelDelta /120 > 0) $scope.gallery.next();
                    else $scope.gallery.prev();

                    $scope.gallery.scrolled = true;
                    $timeout(function(){
                        $scope.gallery.scrolled = false;
                    }, 300);

                    return false;
                });
            });
        });

        $scope.gallery.next = function(){
            angular.element('#slides2 .currItem .controlsCon .arrow-right').trigger('click');
        }

        $scope.gallery.prev = function(){
            angular.element('#slides2 .currItem .controlsCon .arrow-left').trigger('click');
        }

        $scope.init = function(){

        }

        $scope.init();
    }]);