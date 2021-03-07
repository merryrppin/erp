agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
angular.module(aLanguage.appName).controller('addSaleInvoiceController', ["$scope", '$rootScope', "$location", "$filter", "GeneralService", addSaleInvoiceController]);
function addSaleInvoiceController($scope, $rootScope, $location, $filter, GeneralService) {

    GeneralService.hideGeneralButtons();
    $rootScope.showSaveButton = true;
    $rootScope.showCancelButton = true;
    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;

    $scope.userLogin = GeneralService.userLogin;

    $scope.IVAValue = 0;
    $scope.netTotalValue = 0;
    $scope.totalDiscountValue = 0;
    $scope.totalWithoutIvaValue = 0; 

    $scope.currentProductCode = '';

    $scope.productAmount = 1;

    $scope.productsWithPrice = [];
    $scope.rowDataProducts = [];
    $scope.vendors = [];

    $scope.invoiceSale = {
        clientDocument: '',
        clientName: '',
        chkInfoSale: false,
        selectedVendor: null
    };

    $scope.addRemoveAmount = function (Amount) {
        var currentAmountAfterUpdate = $scope.productAmount + Amount;
        $scope.productAmount = currentAmountAfterUpdate < 1 ? $scope.productAmount : currentAmountAfterUpdate;
    };

    $scope.addProduct = function () {
        var productSelected = $filter('filter')($scope.productsWithPrice, { ProductCode: $scope.currentProductCode }, true);
        if (productSelected.length > 0) {
            $scope.addProductToGrid(angular.copy(productSelected[0]));
        } else {
            $scope.loadProductsWithPrice(function () {
                var productSelectedAfterLoad = $filter('filter')($scope.productsWithPrice, { ProductCode: $scope.currentProductCode }, true);
                if (productSelectedAfterLoad.length > 0) {
                    $scope.addProductToGrid(productSelectedAfterLoad[0]);
                } else {
                    GeneralService.showToastR({
                        body: aLanguage.notProductFound,
                        type: 'error'
                    });
                }
            })
        }
    };

    $scope.totalWithoutIva = function () {
        var sumTotalWithoutIva = 0;
        $.each($scope.rowDataProducts, function (i, objProduct) {
            sumTotalWithoutIva += parseFloat(objProduct.Price) * parseInt(objProduct.Amount);
        });
        return sumTotalWithoutIva;
    };

    $scope.totalDiscount = function () {
        var sumTotalDiscount = 0;
        $.each($scope.rowDataProducts, function (i, objProduct) {
            sumTotalDiscount += parseFloat(objProduct.Discount);
        });
        return sumTotalDiscount;
    };

    $scope.addProductToGrid = function (productSelected) {
        productSelected.Amount = 1;
        productSelected.Discount = 0;
        $scope.rowDataProducts.push(productSelected);
        $scope.productsGrid.api.setRowData($scope.rowDataProducts);
        $scope.currentProductCode = '';
        $scope.totalDiscountValue = $scope.totalDiscount();
        $scope.totalWithoutIvaValue = $scope.totalWithoutIva();
        console.log($scope.rowDataProducts);
    }

    $scope.currencyFormatter = function (currency, sign) {
        var sansDec = parseFloat(currency).toFixed(2);
        var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return sign + `${formatted}`;
    }

    $scope.columnDefs = [
        {
            headerName: aLanguage.code,
            field: "ProductCode",
            width: 10
        },
        {
            headerName: aLanguage.productName,
            field: "ProductDescription",
            width: 35
        },
        {
            headerName: aLanguage.discount,
            field: "Discount",
            width: 10,
            editable: true,
            cellEditor: 'numericCellEditor'
        },
        {
            headerName: aLanguage.amount,
            field: "Amount",
            width: 10,
            editable: true,
            cellEditor: 'numericCellEditor'
        },
        {
            headerName: aLanguage.price,
            field: "Price",
            width: 15,
            valueFormatter: function (params) {
                return $scope.currencyFormatter(params.data.Price, '$');
            }
        }
    ];

    $scope.productsGrid = {
        localeText: $scope.aLanguage.localeTextAgGrid,
        columnDefs: $scope.columnDefs,
        rowData: $scope.rowDataProducts,
        suppressRowClickSelection: true,
        enableColResize: true,
        defaultColDef: {
            sortable: true,
            filter: false,
            resize: true
        },
        onGridReady(params) {
            params.api.sizeColumnsToFit();
        },
        components: {
            numericCellEditor: NumericEditor
        },
    };

    $scope.loadProductsWithPrice = function (funcProduct) {
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
                    if (typeof funcProduct !== 'undefined') funcProduct();
                }
            }
        });
    };

    $scope.loadActiveVendors = function () {
        var dataSP = {
            "StoredProcedureName": "GetActiveVendors",
            "StoredParams": []
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
            data: dataSP,
            success: function (response) {
                if (response.Exception === null) {
                    $scope.vendors = angular.copy(response.Value[0].DataMapped);
                }
                var aSelectVendorsMapped = $scope.vendors.map(function (objVendor) {
                    return {
                        id: objVendor.VendorId,
                        text: objVendor.VendorName,
                        WarehouseCode: objVendor.WarehouseCode
                    }
                });
                var aSelectVendors = [];
                var aWareHouseCodes = $scope.vendors.map(function (objVendor) {
                    return {
                        WarehouseCode: objVendor.WarehouseCode
                    }
                }).unique('WarehouseCode');
                $.each(aWareHouseCodes, function (i, objWareHouseCode) {
                    aSelectVendors.push({
                        text: objWareHouseCode.WarehouseCode,
                        children: $filter('filter')(aSelectVendorsMapped, { WarehouseCode: objWareHouseCode.WarehouseCode }, true)
                    });
                });
                $filter('filter')($scope.productsWithPrice, { ProductCode: $scope.currentProductCode }, true);
                $("#selectVendors").select2({
                    placeholder: aLanguage.selectOption,
                    allowClear: true,
                    data: aSelectVendors
                });
            }
        });
    };

    $rootScope.saveBtnFunction = function () {
        var vendorSelected = $("#selectVendors").val();
        if (vendorSelected !== null && vendorSelected !== "") {
            $scope.invoiceSale.selectedVendor = vendorSelected;
            $scope.saveInvoice();
        } else {
            GeneralService.showToastR({
                body: aLanguage.selectVendor,
                type: 'error'
            });
        }
    }

    $scope.saveInvoice = function () {
        //TODO: Guardar despues de realizar las validaciones
    };

    angular.element(document).ready(init);

    function init() {
        $scope.loadProductsWithPrice();
        $scope.loadActiveVendors();
    }
}