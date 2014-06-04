'use strict';

angular.module('fasyaApp')
  .directive('comments', ['$window', function ($window) {
    return {
            restrict: 'E',
            scope: {
                disqus_shortname: '@disqusShortname',
                disqus_identifier: '@disqusIdentifier',
                disqus_title: '@disqusTitle',
                disqus_url: '@disqusUrl',
                disqus_category_id: '@disqusCategoryId',
                disqus_disable_mobile: '@disqusDisableMobile'
            },
            template: '<div id="disqus_thread"></div>',
            link: function(scope) {

                scope.$watch('disqus_identifier', function(newVal, oldVal){

                    if(newVal) {
                        $window.disqus_shortname = scope.disqus_shortname;
                        $window.disqus_identifier = scope.disqus_identifier;
                        $window.disqus_title = scope.disqus_title;
                        $window.disqus_url = scope.disqus_url;
                        $window.disqus_category_id = scope.disqus_category_id;
                        $window.disqus_disable_mobile = scope.disqus_disable_mobile;

                        if(!$window.DISQUS){
                            $window.disqus_identifier = 'image'+$window.disqus_identifier;
                            var disqus_config = function () { 
                              this.language = "en";
                            };

                            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                        } else {
                            $window.DISQUS.reset({
                                reload: true,
                                config: function () {
                                    this.page.identifier = disqus_identifier;
                                    this.page.url = disqus_url;
                                    this.page.title = disqus_title;
                                    this.language = 'en';
                                }
                            });
                        }
                    }
                })
                
            }
        };
  }]);
