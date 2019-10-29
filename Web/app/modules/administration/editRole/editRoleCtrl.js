angular.module(aLanguage.appName).controller('editRoleController', ["$scope", "AdministrationService", editRoleController]);
function editRoleController($scope, AdministrationService) {
    $scope.aLanguage = aLanguage;
    $scope.titlePage = 'Editar rol';

    $scope.enabledRole = true;
    $scope.roleSelected = null;
    $scope.roleIdSelected = 1;
    $scope.roles = [{
        RoleId: 1,
        RoleName: 'Rol 1',
        RoleDescription: 'Descripcion del rol 1'
    }, {
        RoleId: 2,
        RoleName: 'Segundo rol',
        RoleDescription: 'n.a.'
    }, {
        RoleId: 3,
        RoleName: 'Tercer rol',
        RoleDescription: ''
    }];
}