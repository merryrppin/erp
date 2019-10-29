function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/404");
    $ocLazyLoadProvider.config({
        //debug: true
    });
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/modules/general/home/home.html",
            controller: "homeController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: aLanguage.appName,
                        files: [
                            'app/modules/general/home/homeCtrl.js'
                        ]
                    });
                }]
            }
        })
        .state('404', {
            url: "/404",
            templateUrl: "app/modules/general/error/404.html",
            controller: "errorController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: aLanguage.appName,
                        files: [
                            'app/modules/general/error/errorCtrl.js'
                        ]
                    });
                }]
            }
        });
}

angular.module(aLanguage.appName).config(config)
    .run(function ($rootScope, $state) {
        //$rootScope.aLanguage = aLanguage;
    });