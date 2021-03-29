agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module(aLanguage.appName, ["agGrid"]);
angular.module(aLanguage.appName).controller('addSaleInvoiceController', ["$scope", '$rootScope', "$location", "$filter", "GeneralService", addSaleInvoiceController]);
function addSaleInvoiceController($scope, $rootScope, $location, $filter, GeneralService) {

    GeneralService.hideGeneralButtons();
    $rootScope.showNewButton = true;
    $rootScope.showSaveButton = true;
    $rootScope.showCancelButton = true;

    $scope.clearForm = function () {
        $scope.invoiceSale = {
            clientDocument: '',
            clientName: '',
            chkInfoSale: false,
            selectedVendor: null
        };
        $scope.invoiceSale.IVAValue = 0;
        $scope.invoiceSale.netTotalValue = 0;
        $scope.invoiceSale.totalDiscountValue = 0;
        $scope.invoiceSale.totalWithoutIvaValue = 0;
        $scope.currentProductCode = '';
        $scope.productAmount = 1;
        $scope.productsWithPrice = [];
        $scope.rowDataProducts = [];
        $scope.vendors = [];
        $scope.savedInvoice = false;
        $('#selectVendors').val(null).trigger('change');
        if (typeof $scope.productsGrid !== 'undefined')
            $scope.productsGrid.api.setRowData([]);
        $rootScope.showSaveButton = true;
        $rootScope.showPrintButton = false;

        if (typeof $scope.productsGrid !== 'undefined') {
            $scope.productsGrid.api.setColumnDefs($scope.getColumnDefs());
            $scope.productsGrid.api.sizeColumnsToFit();
        }
    };

    $scope.clearForm();

    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;

    $scope.userLogin = GeneralService.userLogin;

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
            sumTotalDiscount += parseFloat(objProduct.Discount) * parseInt(objProduct.Amount);
        });
        return sumTotalDiscount;
    };

    $scope.totalIVA = function () {
        var sumTotalIVA = 0;
        $.each($scope.rowDataProducts, function (i, objProduct) {
            sumTotalIVA += (parseFloat(objProduct.Price) * parseInt(objProduct.Amount)) * (objProduct.TariffDutty / 100);
        });
        return sumTotalIVA;
    };

    $scope.reloadValues = function () {
        $scope.invoiceSale.totalDiscountValue = $scope.totalDiscount();
        $scope.invoiceSale.totalWithoutIvaValue = $scope.totalWithoutIva();
        $scope.invoiceSale.IVAValue = $scope.totalIVA();
        $scope.invoiceSale.netTotalValue = $scope.invoiceSale.totalWithoutIvaValue + $scope.invoiceSale.IVAValue - $scope.invoiceSale.totalDiscountValue;
        $scope.safeApply();
    };

    $scope.safeApply = function (fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof (fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $scope.addProductToGrid = function (productSelected) {
        productSelected.Amount = 1;
        productSelected.Discount = 0;
        $scope.rowDataProducts.push(productSelected);
        $scope.productsGrid.api.setRowData($scope.rowDataProducts);
        $scope.currentProductCode = '';
        $scope.reloadValues();
    }

    $scope.currencyFormatter = function (currency, sign) {
        var sansDec = parseFloat(currency).toFixed(2);
        var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return sign + `${formatted}`;
    }

    $scope.getColumnDefs = function () {
        return [
            {
                headerName: aLanguage.code,
                lockPosition: true,
                field: "ProductCode",
                width: 10
            },
            {
                headerName: aLanguage.productName,
                lockPosition: true,
                field: "ProductDescription",
                width: 35
            },
            {
                headerName: aLanguage.discount,
                lockPosition: true,
                field: "Discount",
                width: 10,
                editable: !$scope.savedInvoice,
                cellEditor: 'numericCellEditor'
            },
            {
                headerName: aLanguage.amount,
                lockPosition: true,
                field: "Amount",
                width: 10,
                editable: !$scope.savedInvoice,
                cellEditor: 'numericCellEditor'
            },
            {
                headerName: aLanguage.price,
                lockPosition: true,
                field: "Price",
                width: 15,
                valueFormatter: function (params) {
                    return $scope.currencyFormatter(params.data.Price, '$');
                }
            }
        ]
    };

    $scope.productsGrid = {
        localeText: $scope.aLanguage.localeTextAgGrid,
        columnDefs: $scope.getColumnDefs(),
        rowData: $scope.rowDataProducts,
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
            numericCellEditor: NumericEditor
        },
        onCellEditingStopped: function (event) {
            $scope.reloadValues();
        }
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
        if ($scope.rowDataProducts.length === 0) {
            GeneralService.showToastR({
                body: aLanguage.addAtLeastOneItem,
                type: 'error'
            });
            return;
        }
        var vendorSelected = $("#selectVendors").val();
        if (vendorSelected !== null && vendorSelected !== "") {
            $scope.productsGrid.api.stopEditing();
            $scope.reloadValues();
            $scope.invoiceSale.selectedVendor = vendorSelected;
            $scope.saveInvoice();
        } else {
            GeneralService.showToastR({
                body: aLanguage.selectVendor,
                type: 'error'
            });
        }
    }

    $rootScope.newBtnFunction = function () {
        if (!$scope.savedInvoice) {
            GeneralService.showSweetAlert({
                title: aLanguage.NotSavedSaleInvoice,
                text: aLanguage.AreYouSureContinue,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: aLanguage.accept,
                cancelButtonText: aLanguage.cancel,
                funcIsConfirmed: $scope.clearForm
            });
        } else {
            $scope.clearForm();
        }
    }

    $scope.saveInvoice = function () {
        var data = {
            "SaleInvoice": JSON.stringify($scope.invoiceSale),
            "aProductsCompressed": LZString.compressToUTF16(JSON.stringify($scope.rowDataProducts)),
            "UserCreatedBy": $scope.userLogin.UserCompleteName
        };
        GeneralService.executeAjax({
            url: 'api/sale/saveSaleInvoice',
            data: data,
            success: function (response) {
                if (response.Exception === null || response === true) {
                    $scope.savedInvoice = true;
                    $scope.productsGrid.api.setColumnDefs($scope.getColumnDefs());
                    $scope.productsGrid.api.sizeColumnsToFit();
                    $rootScope.showSaveButton = false;
                    $rootScope.showPrintButton = true;
                }
            }
        });
    };

    angular.element(document).ready(init);

    function init() {
        $scope.loadProductsWithPrice();
        $scope.loadActiveVendors();
    }
}