angular.module(aLanguage.appName).controller('addWarehouseController', ["$scope", '$rootScope', "$location", "GeneralService", addWarehouseController]);
function addWarehouseController($scope, $rootScope, $location, GeneralService) {
    GeneralService.hideGeneralButtons();
    $rootScope.showSaveButton = true;
    $scope.aLanguage = aLanguage;
    $scope.warehouseIdSelected = typeof GeneralService.warehouseId !== 'undefined' ? GeneralService.warehouseId : -1;

    $scope.currentWarehouse = { WarehouseId: $scope.warehouseIdSelected };

    $scope.loadWarehouse = function () {

    };

    $scope.saveWarehouse = function () {
        var dataSP = {
            "StoredProcedureName": "SaveWarehouses",
            "StoredParams": [{ name: 'warehouses', value: JSON.stringify($scope.currentWarehouse)}]
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

    $rootScope.saveBtnFunction = function () {
        if ($("#frmWarehouse").valid()) {
            $scope.saveWarehouse();
        }
    }

    $scope.returnToList = function () {
        $location.path('/listWarehouse');
    };

    angular.element(document).ready(init);

    function init() {
        if ($scope.warehouseIdSelected !== -1)
            $scope.loadWarehouse();
    }

    $(document).ready(function () {
        $("#frmWarehouse").validate({
            rules: {
                warehouseCode: {
                    required: true
                },
                description: {
                    required: true
                },
                default: {
                    required: true,
                },
                inactive: {
                    required: true
                }
            }
        });
    });
}