'use strict';

angular.module('fasyaApp')
    .controller('GalleryCtrl', ['$scope', '$timeout', '$location', 'Restangular', '$firebase', function ($scope, $timeout, $location, Restangular, $firebase) {

        var firebaseUrl = "https://fasya.firebaseio.com/gallery";
        
        var baseAccounts = Restangular.allUrl('firebase', firebaseUrl+'.json');

        $scope.gallery = {
            images: null,
            navigated: false,
            disqus: {}
        };

        baseAccounts.getList().then(function(images){
            $scope.gallery.images = images;
            var promise = false;

            $timeout(function(){
                $("#fasyaGallery").fasyaGallery({
                    settings_slideshowTime: 5,
                    design_padding: 150,
                    onChange: function(data){
                        if(promise) $timeout.cancel(promise);
                        promise = $timeout(function(){
                            $scope.gallery.disqus.shortname = 'fasya90';
                            $scope.gallery.disqus.title = 'Image No '+data.active;
                            $scope.gallery.disqus.url = $location.protocol() + "://" + $location.host().toString() + ":" + $location.port() + "/gallery/image" + data.active + "/";
                            $scope.gallery.disqus.id = 'image'+data.active;
                        }, 1500);
                    }
                });

                $('body').bind('keydown',function(e){
                    if($scope.gallery.navigated) return false;

                    switch(e.keyCode){
                        case 39:
                            $scope.gallery.next();
                            break;
                        case 37:
                            $scope.gallery.prev();
                            break;
                        default:
                            return;
                    }

                    $scope.gallery.navigated = true;
                    $scope.gallery.navTimeout();

                    return false;
                });

                $('#fasyaGallery').bind('mousewheel',function(e){
                    if($scope.gallery.navigated) return false;

                    if(e.originalEvent.wheelDelta /120 > 0) $scope.gallery.next();
                    else $scope.gallery.prev();

                    $scope.gallery.navigated = true;
                    $scope.gallery.navTimeout();

                    return false;
                });
            });
        });

        $scope.gallery.navTimeout = function(){
            $timeout(function(){
                $scope.gallery.navigated = false;
            }, 300);
        }

        $scope.gallery.next = function(){
            angular.element('#fasyaGallery .currItem .controlsCon .arrow-right').trigger('click');
        }

        $scope.gallery.prev = function(){
            angular.element('#fasyaGallery .currItem .controlsCon .arrow-left').trigger('click');
        }

        $scope.init = function(){

        }

        $scope.init();
    }]);