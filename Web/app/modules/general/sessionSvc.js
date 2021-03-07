angular.module(aLanguage.appName).factory('SessionService', ['$rootScope', SessionService]);
function SessionService($rootScope) {

    var sessionService = {

        model: {
            name: '',
            email: '',
            userSession: '',
            company : {}
        },

        SaveState: function () {
            sessionStorage.sessionService = angular.toJson(sessionService.model);
        },

        RestoreState: function () {
            sessionService.model = angular.fromJson(sessionStorage.sessionService);
        },

        ClearState: function () {
            sessionStorage.sessionService = null;
        }
    }

    $rootScope.$on("savestate", sessionService.SaveState);
    $rootScope.$on("restorestate", sessionService.RestoreState);
    $rootScope.$on("clearState", sessionService.ClearState);

    return sessionService;
}