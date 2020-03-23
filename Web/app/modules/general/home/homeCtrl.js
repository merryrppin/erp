angular.module(aLanguage.appName).controller('homeController', ["$scope", "GeneralService", homeController]);
function homeController($scope, GeneralService) {
    $scope.aLanguage = aLanguage;
    GeneralService.showPanels();//TEST
}