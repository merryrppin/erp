agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
module.controller('listWarehouseController', ["$scope", "$location", "GeneralService", listWarehouseController]);

function listWarehouseController($scope, $location, GeneralService) {
    GeneralService.hideGeneralButtons();
    $scope.aLanguage = aLanguage;
    $scope.warehouseIdSelected = typeof GeneralService.warehouseId !== 'undefined' ? GeneralService.warehouseId : -1;

    $scope.columnDefs = [
        { headerName: aLanguage.warehouseCode, field: "WarehouseCode" },
        { headerName: aLanguage.description, field: "Description" },
        { headerName: aLanguage.default, field: "Default" },
        { headerName: aLanguage.inactive, field: "Inactive" }
    ];

    $scope.rowData = [];

    $scope.listWarehouseGrid = {
        localeText: $scope.aLanguage.localeTextAgGrid,
        columnDefs: $scope.columnDefs,
        rowData: $scope.rowData,
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        enableColResize: true,
        defaultColDef: {
            sortable: true,
            filter: true,
            resize: true
        }
    };

    $scope.loadWarehouse = function () {
        GeneralService.executeAjax({
            url: 'api/getAllWarehouse',
            success: function (response) {
                if (response.Exception !== null) {
                    $scope.listWarehouseGrid.api.setRowData(response);
                }
            }
        });
    };

    $scope.addWarehouse = function () {
        GeneralService.warehouseId = -1;
        $location.path('/addWarehouse');
    };

    $scope.modWarehouseId = function () {
        GeneralService.warehouseId = $scope.warehouseIdSelected;
    };

    angular.element(document).ready(init);

    function init() {
        $scope.loadWarehouse();
    }
}