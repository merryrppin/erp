angular.module(aLanguage.appName).controller('generalController', ["$scope", "$timeout", "$location", "GeneralService", generalController]);
function generalController($scope, $timeout, $location, GeneralService) {
    $scope.aLanguage = aLanguage;

    $scope.loadDataFromGeneralService = function () {
        //$scope.contentTitle = GeneralService.contentTitle;
    };

    $scope.verificarAutenticacion = function () {
        //GeneralService.executeAjax({
        //    method: 'GET',
        //    url: 'api/pingToServer',
        //    confirmation: false,
        //    success: function (response) {
        //        if (response) {
        //            GeneralService.autentication.isAuthenticated = true;
        //            GeneralService.showPanels('Home');//test
        //            $scope.loadDataFromGeneralService();//test   
        //        } else {
        //            GeneralService.autentication.isAuthenticated = false;
        //            GeneralService.hidePanels();//test     
        //            $scope.loadDataFromGeneralService();    //test              
        //            $location.path("/login");
        //        }
        //    }
        //});
    };

    $scope.loadDataFromGeneralService();//test   
    $timeout($scope.verificarAutenticacion());
}