agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module(aLanguage.appName, ["agGrid"]);

module.controller('userController', ["$scope", "GeneralService", userController]);
function userController($scope, GeneralService) {
    $scope.aLanguage = aLanguage;
    $scope.userIdSelected = typeof GeneralService.userId !== 'undefined' ? GeneralService.userId : -1;

    var columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
    ];

    var rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ];

    $scope.listUsersGrid = {
        localeText: $scope.aLanguage.localeTextAgGrid,
        columnDefs: columnDefs,
        rowData: rowData,
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        defaultColDef: {
            sortable: true,
            filter: true,
            resize: true
        }
    };

    $scope.modUserId = function () {
        GeneralService.userId = $scope.userIdSelected;
    };

    //$scope.listUsersGrid = {
    //    rowSelection: 'multiple',
    //    //localeText: getLocalTextAgGrid,
    //    //columnDefs: ctrl.originalColumnDefs,
    //    rowData: [],
    //    pagination: false,
    //    defaultColDef: { menuTabs: ['filterMenuTab'], lockPosition: false },
    //    angularCompileRows: true,
    //    enableFilter: true,
    //    enableMenuTab: false,
    //    enableColResize: true,
    //    enableSorting: true,
    //    animateRows: true,
    //    suppressMenuHide: true,
    //    suppressPaginationPanel: true
    //};
}