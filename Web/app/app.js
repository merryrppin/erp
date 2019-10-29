(function () {
    angular.module(aLanguage.appName, [
        //'ngRoute',
        'ui.router',                    // Routing
        'oc.lazyLoad'                  // ocLazyLoad
    ]).run(function ($rootScope, $state, $injector) {
        //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {            
        //    console.log(fromState);
        //    console.log(toState);
        //});
    });
})();