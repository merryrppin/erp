agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
angular.module(aLanguage.appName).controller('addSaleInvoiceController', ["$scope", '$rootScope', "$location", "GeneralService", addSaleInvoiceController]);
function addSaleInvoiceController($scope, $rootScope, $location, GeneralService) {

    GeneralService.hideGeneralButtons();
    $rootScope.showSaveButton = true;
    $rootScope.showCancelButton = true;
    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;

    $scope.chkInfoSale = false;

    $scope.columnDefs = [
        { headerName: aLanguage.code, field: "Code" },
        { headerName: aLanguage.productName, field: "ProductName" },
        { headerName: aLanguage.amount, field: "Amount" },
        { headerName: aLanguage.price, field: "Price" }
    ];

    $scope.rowData = [];

    $scope.productsGrid = {
        localeText: $scope.aLanguage.localeTextAgGrid,
        columnDefs: $scope.columnDefs,
        rowData: $scope.rowData,
        suppressRowClickSelection: true,
        enableColResize: true,
        defaultColDef: {
            sortable: true,
            filter: true,
            resize: true
        }
    };
}