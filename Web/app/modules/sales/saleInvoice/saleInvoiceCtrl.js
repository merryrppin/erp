angular.module(aLanguage.appName).controller('saleInvoiceController', ["$scope", '$rootScope', "$location", "GeneralService", saleInvoiceController]);
function saleInvoiceController($scope, $rootScope, $location, GeneralService) {

    GeneralService.hideGeneralButtons();
    $rootScope.showSaveButton = true;
    $rootScope.showCancelButton = true;
    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;

}