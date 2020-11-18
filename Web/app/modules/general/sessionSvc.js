angular.module(aLanguage.appName).factory('SessionService', ['$rootScope', SessionService]);
function SessionService($rootScope) {

    var sessionService = {

        model: {
            name: '',
            email: '',
            userSession: ''
        },

        SaveState: function () {
            sessionStorage.sessionService = angular.toJson(sessionService.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.sessionService);
        }
    }

    $rootScope.$on("savestate", sessionService.SaveState);
    $rootScope.$on("restorestate", sessionService.RestoreState);

    return sessionService;
}