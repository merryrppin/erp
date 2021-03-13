angular.module(aLanguage.appName).controller('addSerieController', ["$scope", '$rootScope', "$location", "GeneralService", addSerieController]);
function addSerieController($scope, $rootScope, $location, GeneralService) {
    GeneralService.hideGeneralButtons();
    $rootScope.showSaveButton = true;
    $scope.aLanguage = aLanguage;
    $scope.serieIdSelected = typeof GeneralService.SerieId !== 'undefined' ? GeneralService.SerieId : -1;

    $scope.currentSerie = { SerieId: $scope.serieIdSelected };

    $scope.loadSerie = function () {

    };

    $scope.saveSerie = function () {
        var dataSP = {
            "StoredProcedureName": "SaveSerie",
            "StoredParams": [{ name: 'Serie', value: JSON.stringify($scope.currentSerie) }]
        };
        GeneralService.executeAjax({
            url: 'api/executeStoredProcedure',
            data: dataSP,
            success: function (response) {
                if (response.Exception === null) {
                    $scope.returnToList();
                }
            }
        });
    };

    $rootScope.saveBtnFunction = function () {
        if ($("#frmSerie").valid()) {
            $scope.saveSerie();
        }
    }

    $scope.returnToList = function () {
        $location.path('/listSeries');
    };

    angular.element(document).ready(init);

    function init() {
        if ($scope.serieIdSelected !== -1)
            $scope.loadSerie();
    }

    $(document).ready(function () {
        $("#frmSerie").validate({
            rules: {
                SerieCode: {
                    required: true
                },
                description: {
                    required: true
                },
                InitialNumber: {
                    required: true
                },
                CurrentNumber: {
                    required: true
                },
                FinalNumber: {
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