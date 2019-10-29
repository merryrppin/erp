angular.module(aLanguage.appName).factory('GeneralService', ['$http', GeneralService]);
function GeneralService($http) {
    var generalService = {};

    generalService.autentication = { isAuthenticated: true };//false por defecto
    
    generalService.executeAjax = function (data) {
        var options = angular.extend({}, {
            'method': "POST",
            'url': '',
            'params': "",
            'data': "",
            'async': true,
            'carga': true,
            'success': function () { },
            'confirmation': false,
            'funcionCorrecto': function () { },
            'funcionIncorrecto': function () { },
            'spinner': true,
            'tablaDataTable': ""
        }, data);
        $http({
            method: options.method,
            async: options.async,
            url: options.url,
            params: options.params,
            data: options.data
        }).then(function (response) {
            if (options.confirmation) {
                if (response.data === true) {
                    generalService.showToastR({
                        body: aLanguage.generalSuccess
                    });
                    options.funcionCorrecto(response.data);
                }
                else {
                    generalService.showToastR({
                        body: aLanguage.generalError,
                        type: 'error'
                    });
                    options.funcionIncorrecto();
                }
            }

            if (options.tablaDataTable !== "") {
                var oTable = $(options.tablaDataTable).dataTable();
                oTable.fnClearTable();
                if (response !== null && response.data.length > 0) {
                    oTable.fnAddData(response.data);
                    oTable.fnDraw();
                    $("[data-toggle='tooltip']").tooltip();
                }
            }
            options.success(response.data);
        }), function (response) {
            generalService.showToastR({
                body: aLanguage.fatalError,
                type: 'error'
            });
        };
    };

    generalService.showToastR = function (data) {
        var options = angular.extend({}, {
            'type': 'success',
            'showCloseButton': true,
            'title': '',
            'body': aLanguage.generalSuccess,
            'closeButton': true,
            'timeOut': '3000',
            'newestOnTop': false,
            'progressBar': true,
            'position-class': "toast-top-right",
            'preventDuplicates': true,
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut',
        }, data);
        toaster.pop(options);
    };

    return generalService;
}