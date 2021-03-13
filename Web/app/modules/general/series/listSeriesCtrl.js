agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
module.controller('listSeriesController', ["$scope", "$location", "GeneralService", listSeriesController]);

function listSeriesController($scope, $location, GeneralService) {
    GeneralService.hideGeneralButtons();
    $scope.aLanguage = aLanguage;
    $scope.serieIdSelected = typeof GeneralService.serieId !== 'undefined' ? GeneralService.serieId : -1;
    $scope.checkClass = 'la la-check-circle';
    $scope.uncheckClass = 'la la-circle';
    $scope.columnDefs = [
        { headerName: aLanguage.SerieCode, field: "SerieCode" },
        { headerName: aLanguage.description, field: "Description" },
        { headerName: aLanguage.default, field: "Default", cellRenderer: params => { return '<span><i class="' + (params.data.Default ? $scope.checkClass : $scope.uncheckClass) + '"></i></span>' } },
        { headerName: aLanguage.Active, field: "Active", cellRenderer: params => { return '<span><i class="' + (params.data.Active ? $scope.checkClass : $scope.uncheckClass) + '"></i></span>' } }
    ];

    $scope.rowData = [];

    $scope.listSeriesGrid = {
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

    $scope.loadSeries = function () {
        var dataSP = {
            "StoredProcedureName": "GetActiveSeries",
            "StoredParams": []
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
            data: dataSP,
            success: function (response) {
                if (response.Exception === null) {
                    var seriesrows = response.Value[0].DataMapped.map(function (obj) {
                        obj.Default = obj.Default.toLowerCase() == 'true';
                        obj.Active = obj.Active.toLowerCase() == 'true';
                        return obj;
                    });
                    $scope.listSeriesGrid.api.setRowData(seriesrows);
                    $scope.rowData = seriesrows;
                }
            }
        });
    };

    $scope.addSeries = function () {
        GeneralService.serieId = -1;
        $location.path('/addSeries');
    };

    $scope.modSerieId = function () {
        GeneralService.serieId = $scope.serieIdSelected;
    };

    angular.element(document).ready(init);

    function init() {
        $scope.loadSeries();
    }
}