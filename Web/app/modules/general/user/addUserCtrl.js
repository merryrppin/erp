angular.module(aLanguage.appName).controller('addUserController', ["$scope", "$location", "GeneralService", addUserController]);
function addUserController($scope, $location, GeneralService) {
    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;

    $scope.currentUser = { UserId: $scope.userIdSelected };

    $scope.loadUser = function () {
    };

    $scope.saveUser = function () {
        debugger;
        var apiMethod = $scope.userIdSelected === -1 ? 'addUser' : 'updateUser';
        GeneralService.executeAjax({
            url: 'api/' + apiMethod,
            data: $scope.currentUser,
            success: function (response) {
                if (response) {
                    GeneralService.showToastR({
                        body: aLanguage.saveSuccessful,
                        type: 'success'
                    });
                    $scope.currentUser = {};
                } else {
                    GeneralService.showToastR({
                        body: aLanguage.fatalError,
                        type: 'error'
                    });
                }

            }
        });
    };

    angular.element(document).ready(init);

    function init() {
        if ($scope.userIdSelected !== -1)
            $scope.loadUser();
    }
}