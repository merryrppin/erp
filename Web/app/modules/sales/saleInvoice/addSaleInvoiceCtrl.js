agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
angular.module(aLanguage.appName).controller('addSaleInvoiceController', ["$scope", '$rootScope', "$location", "GeneralService", addSaleInvoiceController]);
function addSaleInvoiceController($scope, $rootScope, $location, GeneralService) {

    GeneralService.hideGeneralButtons();
    $rootScope.showSaveButton = true;
    $rootScope.showCancelButton = true;
    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;

    $scope.totalWithoutIva = 0;
    $scope.IVA = 0;
    $scope.totalDiscount = 0;
    $scope.netTotal = 0;

    $scope.clientDocument = '';
    $scope.clientName = '';

    $scope.productAmount = 1;

    $scope.addRemoveAmount = function (Amount) {
        var currentAmountAfterUpdate = $scope.productAmount + Amount;
        $scope.productAmount = currentAmountAfterUpdate < 1 ? $scope.productAmount : currentAmountAfterUpdate;
    };

    $scope.chkInfoSale = false;

    $scope.columnDefs = [
        { headerName: aLanguage.code, field: "Code" },
        { headerName: aLanguage.productName, field: "ProductName" },
        { headerName: aLanguage.amount, field: "Amount" },
        { headerName: aLanguage.price, field: "Price" }
    ];

    $scope.rowDataProducts = [];

    $scope.productsGrid = {
        localeText: $scope.aLanguage.localeTextAgGrid,
        columnDefs: $scope.columnDefs,
        rowData: $scope.rowDataProducts,
        suppressRowClickSelection: true,
        enableColResize: true,
        defaultColDef: {
            sortable: true,
            filter: true,
            resize: true
        }
    };

    $scope.productsWithPrice = [];

    $scope.loadProductsWithPrice = function () {
        var dataSP = {
            "StoredProcedureName": "GetActiveProductsWithPrice",
            "StoredParams": []
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
            data: dataSP,
            success: function (response) {
                if (response.Exception === null) {
                    $scope.productsWithPrice = angular.copy(response.Value[0].DataMapped);
                }
            }
        });
    };

    angular.element(document).ready(init);

    function init() {
        $scope.loadProductsWithPrice();
    }
}