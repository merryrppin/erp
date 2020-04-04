module.controller('listUsesrController', ["$scope", "$location", "GeneralService", listUsesrController]);
function listUsesrController($scope, $location, GeneralService) {
    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;
    
    angular.element(document).ready(init);

    function init() {

    }
}