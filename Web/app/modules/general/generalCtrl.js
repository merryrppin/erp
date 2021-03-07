angular.module(aLanguage.appName).controller('generalController', ["$scope", '$rootScope', "$timeout", "$filter", "$location", "SessionService", "GeneralService", generalController]);
function generalController($scope, $rootScope, $timeout, $filter, $location, SessionService, GeneralService) {
    var ctrl = this;
    ctrl.aLanguage = aLanguage;
    ctrl.allLevels = [];
    ctrl.menusByLevel = [];
    ctrl.menus = [];

    ctrl.showSaveButton = $rootScope.showSaveButton;
    ctrl.showClearButton = $rootScope.showClearButton;
    ctrl.showCancelButton = $rootScope.showCancelButton;

    $rootScope.$broadcast('restorestate');
    ctrl.user = SessionService.model;

    ctrl.autentication = GeneralService.autentication;//false por defecto

    $scope.$watch(GeneralService.autentication, function (change) { ///adding watcher on someService.getChange, it will fire when change changes value
        ctrl.autentication = GeneralService.autentication; //setting change to controller here you can put some extra logic
    }.bind(this));

    ctrl.loadDataFromGeneralService = function () {
        //$scope.contentTitle = GeneralService.contentTitle;
    };

    ctrl.verificarAutenticacion = function () {
        if (typeof ctrl.user !== 'undefined' && typeof ctrl.user.UserId !== 'undefined' && ctrl.user.UserId !== null) {
            GeneralService.autentication.isAuthenticated = true;
            GeneralService.showPanels();
        } else {
            //TODO: Funcionalidad comentada, para no redireccionar al login, hasta no tener los usuarios definidos
            //window.location.hash = "#!/login";
            //window.location.pathname = "Login.html";
        }
    };

    ctrl.loadMenus = function () {
        var dataSP = {
            "StoredProcedureName": "GetActiveMenus",
            "StoredParams": []
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
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
    };

    ctrl.recursiveMenus = function (objMenu) {
        objMenu.CurrentLevel++;
        if (objMenu.CurrentLevel >= objMenu.Level) {
            $.each(ctrl.menus);
        } else {
            ctrl.recursiveMenus(objMenu);
        }
    };

    //BEGIN General Buttons
    ctrl.saveBtnFunction = $rootScope.saveBtnFunction;
    ctrl.saveBtnFunction = $rootScope.clearBtnFunction;
    ctrl.saveBtnFunction = $rootScope.cancelBtnFunction;
    //END General Buttons

    angular.element(document).ready(init);

    function init() {
        ctrl.verificarAutenticacion();
        if (ctrl.autentication.isAuthenticated) {
            ctrl.loadDataFromGeneralService();
            ctrl.loadMenus();
        }
    }
}