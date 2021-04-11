agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
angular.module(aLanguage.appName).controller('priceListController', ["$scope", '$rootScope', "$location", "$filter", "GeneralService", priceListController]);
function priceListController($scope, $rootScope, $location, $filter, GeneralService) {

    GeneralService.hideGeneralButtons();
    $rootScope.showSaveButton = true;
    $scope.aLanguage = aLanguage;

    $scope.generalFilter = {};

    $scope.aPriceList = [];
    $scope.aLines = [];
    $scope.aSubLines = [];
    $scope.rowDataPriceList = [];

    $scope.loadActivePriceList = function () {
        var dataSP = {
            "StoredProcedureName": "GetActivePriceList",
            "StoredParams": []
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
            data: dataSP,
            success: function (response) {
                if (response.Exception === null) {
                    $scope.aPriceList = angular.copy(response.Value[0].DataMapped);
                }
            }
        });
    };

    $scope.loadActiveLineList = function () {
    };

    $scope.loadActiveSubLineList = function () {
    };


    $scope.getColumnDefs = function () {
        return [
            {
                headerName: "-",
                lockPosition: true,
                minWidth: 25,
                maxWidth: 50
            },
            {
                headerName: aLanguage.articleCode,
                lockPosition: true,
                field: "ArticleCode",
                minWidth: 50,
                maxWidth: 250
            },
            {
                headerName: aLanguage.description,
                lockPosition: true,
                field: "Description",
                minWidth: 150,
                maxWidth: 750
            },
            {
                headerName: aLanguage.priceList,
                lockPosition: true,
                field: "PriceList",
                minWidth: 75,
                maxWidth: 375
            },
            {
                headerName: aLanguage.basePrice,
                lockPosition: true,
                field: "BasePrice",
                minWidth: 50,
                maxWidth: 250
            },
            {
                headerName: aLanguage.factor,
                lockPosition: true,
                field: "Factor",
                minWidth: 50,
                maxWidth: 250
            },
            {
                headerName: aLanguage.price,
                lockPosition: true,
                field: "Price",
                minWidth: 35,
                maxWidth: 175
            },
            {
                headerName: aLanguage.initialDate,
                lockPosition: true,
                field: "InitialDate",
                minWidth: 50,
                maxWidth: 250
            },
            {
                headerName: aLanguage.endDate,
                lockPosition: true,
                field: "EndDate",
                minWidth: 50,
                maxWidth: 250
            }
        ]
    };

    $scope.piceListGrid = {
        localeText: $scope.aLanguage.localeTextAgGrid,
        columnDefs: $scope.getColumnDefs(),
        rowData: $scope.rowDataPriceList,
        suppressRowClickSelection: true,
        enableColResize: false,
        suppressDragLeaveHidesColumns: true,
        defaultColDef: {
            sortable: false,
            filter: false,
            resize: false
        },
        onGridReady(params) {
            params.api.sizeColumnsToFit();
        },
        components: {
            decimalCellEditor: DecimalEditor
        }
    };

    angular.element(document).ready(init);

    function init() {
        $('.datepickerForm').datepicker();
        $scope.loadActivePriceList();
        $scope.loadActiveLineList();
        $scope.loadActiveSubLineList();
        $scope.clearForm();
    }

    $scope.clearForm = function () {
        $scope.generalFilter = {
            codArtFrom: "",
            codArtTo: "",
            selectedPriceList: -1,
            selectedLine: -1,
            selectedSubLine: -1,
            basePrice: "",
            factor: "",
            initialDate: "",
            endDate: ""
        };
    };

    $scope.generate = function () {
    }

    $scope.search = function () {
        if ($("#priceListFrm").valid()) {

        }
    };

    $(document).ready(function () {
        $("#priceListFrm").validate({
            rules: {
                codArtFrom: {
                    required: true
                },
                codArtTo: {
                    required: true
                },
                selectPriceList: {
                    required: true
                }
            }            
        });
    });
}