angular.module(aLanguage.appName).controller('generalController', ["$scope", "$timeout", "$location", "GeneralService", generalController]);
function generalController($scope, $timeout, $location, GeneralService) {
    var ctrl = this;
    ctrl.aLanguage = aLanguage;

    ctrl.loadDataFromGeneralService = function () {
        //$scope.contentTitle = GeneralService.contentTitle;
    };

    ctrl.verificarAutenticacion = function () {
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

    ctrl.loadMenus = function () {
        var dataSP = {
            "StoredProcedureName": "GetActiveMenus",
            "StoredParams": []
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
            confirmation: false,
            data: dataSP,
            success: function (response) {
                console.log(response);
            }
        });
    };

    angular.element(document).ready(init);

    function init() {
        ctrl.verificarAutenticacion();
        ctrl.loadDataFromGeneralService();
        ctrl.loadMenus();
    }
}