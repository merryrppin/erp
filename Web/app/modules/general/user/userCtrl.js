angular.module(aLanguage.appName).controller('userController', ["$scope", "GeneralService", userController]);
function userController($scope, GeneralService) {
    $scope.aLanguage = aLanguage;


}