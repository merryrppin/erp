angular.module(aLanguage.appName).controller('loginController', ["$scope", "$rootScope", "GeneralService", "SessionService", loginController]);
function loginController($scope, $rootScope, GeneralService, SessionService) {
    $scope.aLanguage = aLanguage;
    // GeneralService.hidePanels();//Todo: TEST

    $scope.LoginEntity = {
        login: '',
        password: '',
    }

    $scope.loginUser = function () {
        if ($("#frmLogin").valid()) {
            GeneralService.executeAjax({
                url: 'api/login',
                data: $scope.LoginEntity,
                success: function (response) {
                    $rootScope.$broadcast('clearState');
                    SessionService.model = angular.copy(response);
                    $rootScope.$broadcast('savestate');
                    $rootScope.$broadcast('restorestate');
                    window.location.hash = "#!/home";
                    window.location.pathname = "General.html";
                }
            });

        }
    };

    $(document).ready(function () {
        $("#frmLogin").validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            }
        });
    });
}