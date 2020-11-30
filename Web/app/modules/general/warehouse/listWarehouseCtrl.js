agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
module.controller('listWarehouseController', ["$scope", "$location", "GeneralService", listWarehouseController]);

function listWarehouseController($scope, $location, GeneralService) {
    GeneralService.hideGeneralButtons();
    $scope.aLanguage = aLanguage;
    $scope.warehouseIdSelected = typeof GeneralService.warehouseId !== 'undefined' ? GeneralService.warehouseId : -1;
    $scope.checkClass = 'la la-check-circle';
    $scope.uncheckClass = 'la la-circle';
    $scope.columnDefs = [
        { headerName: aLanguage.warehouseCode, field: "WarehouseCode" },
        { headerName: aLanguage.description, field: "Description" },
        { headerName: aLanguage.default, field: "Default", cellRenderer: params => { return '<span><i class="'+(params.data.Default ? $scope.checkClass : $scope.uncheckClass) +'"></i></span>'}},
        { headerName: aLanguage.inactive, field: "Inactive", cellRenderer: params => { return '<span><i class="' + (params.data.Inactive ? $scope.checkClass : $scope.uncheckClass) + '"></i></span>'}}
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
        var dataSP = {
            "StoredProcedureName": "GetActiveWarehouses",
            "StoredParams": []
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
            data: dataSP,
            success: function (response) {
                if (response.Exception === null) {
                    var warehouserows = response.Value[0].DataMapped.map(function (obj) {   
                        obj.Default = obj.Default.toLowerCase() == 'true'; 
                        obj.Inactive = obj.Inactive.toLowerCase() == 'true';  
                        return obj;
                    });
                    $scope.listWarehouseGrid.api.setRowData(warehouserows);
                    $scope.rowData = warehouserows;
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