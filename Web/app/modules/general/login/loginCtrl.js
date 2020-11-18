angular.module(aLanguage.appName).controller('loginController', ["$scope", "GeneralService", loginController]);
function loginController($scope, GeneralService) {
    $scope.aLanguage = aLanguage;
    GeneralService.hidePanels();//Todo: TEST
}