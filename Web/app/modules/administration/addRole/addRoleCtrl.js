angular.module(aLanguage.appName).controller('addRoleController', ["$scope", "AdministrationService", addRoleController]);
function addRoleController($scope, AdministrationService) {
    $scope.aLanguage = aLanguage;
    $scope.titlePage = 'Añadir rol';

    $scope.enabledRole = false;
    $scope.roleSelected = {
        RoleId: null,
        RoleName: '',
        RoleDescription: ''
    };
}