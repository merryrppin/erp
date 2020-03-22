angular.module(aLanguage.appName).controller('generalController', ["$scope", "$timeout", "$filter", "$location", "GeneralService", generalController]);
function generalController($scope, $timeout, $filter, $location, GeneralService) {
    var ctrl = this;
    ctrl.aLanguage = aLanguage;
    ctrl.allLevels = [];
    ctrl.menusByLevel = [];
    ctrl.menus = [];

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
                if (response.Exception === null) {
                    ctrl.orderMenus(response.Value[0].DataMapped);
                }
            }
        });
    };

    ctrl.loadAllLevels = function (data) {
        ctrl.allLevels = data.map(function (menuData) {
            return {
                Level: menuData.Level
            };
        }).unique("Level");
    };

    ctrl.loadMenusByLevels = function (data) {
        ctrl.menusByLevel = [];
        $.each(ctrl.allLevels, function (i, levelMenu) {
            var objMenu = { 'Level': levelMenu.Level, 'Menus': $filter('filter')(data, { 'Level': levelMenu.Level }) };
            ctrl.menusByLevel.push(objMenu);
        });
    };

    ctrl.orderMenus = function (data) {
        ctrl.loadAllLevels(data);
        ctrl.loadMenusByLevels(data);
        $.each(ctrl.menusByLevel, function (i, menuByLevel) {
            var nextLevel = i + 1;
            $.each(menuByLevel.Menus, function (j, objMenu) {
                if (nextLevel < ctrl.menusByLevel.length) {
                    var parentMenu = $filter('filter')(ctrl.menusByLevel[nextLevel].Menus, { 'MenuId': objMenu.ParentMenuId }, true);
                    if (parentMenu.length > 0) {
                        if (typeof parentMenu[0].MenusByLevel === 'undefined') parentMenu[0].MenusByLevel = [];
                        parentMenu[0].MenusByLevel.push(objMenu);
                    }
                } else {
                    ctrl.menus.push(objMenu);
                }
            });


        });
        console.log(ctrl.menus);
        //$.each(ctrl.allLevels, function (i, levelMenu) {


        //    objMenu.subMenus = [];
        //    var currentLevel = $filter('filter')(ctrl.menusByLevel, { 'Level': objMenu.Level });
        //    var menusByCurrentLevel = $filter('filter')(ctrl.menusByLevel, { 'Level': objMenu.Level });
        //    if (currentLevel.length === 0) {
        //        ctrl.menusByLevel.push();
        //    }
        //    if (objMenu.Level === 0) {
        //        ctrl.menus.push(objMenu);
        //    }
        //});
    };

    ctrl.recursiveMenus = function (objMenu) {
        objMenu.CurrentLevel++;
        if (objMenu.CurrentLevel >= objMenu.Level) {
            $.each(ctrl.menus);
        } else {
            ctrl.recursiveMenus(objMenu);
        }
    };

    angular.element(document).ready(init);

    function init() {
        ctrl.verificarAutenticacion();
        ctrl.loadDataFromGeneralService();
        ctrl.loadMenus();
    }
}