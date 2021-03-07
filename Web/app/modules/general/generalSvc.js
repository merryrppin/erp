angular.module(aLanguage.appName).factory('GeneralService', ['$http', '$rootScope', '$window', GeneralService]);
function GeneralService($http, $rootScope, $window) {
    var generalService = {};

    generalService.autentication = { isAuthenticated: false, showPanel: false };
    generalService.userLogin = null;
    generalService.selectedLanguage = "es";//TODO: Valor por defecto

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
            'mapData': true
        }, data);
        $http({
            method: options.method,
            async: options.async,
            url: options.url,
            params: options.params,
            data: options.data
        }).then(function (response) {
            if (typeof response === 'undefined' || (typeof response.data.Exception !== 'undefined' && response.data.Exception !== null)) {
                var errorMessage = typeof response === 'undefined' ? aLanguage.generalError : response.data.Exception.Message;
                generalService.showToastR({
                    body: errorMessage,
                    type: 'error'
                });
                return;
            } else {
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
            }
            if (options.mapData && response.data.Value !== null) {
                var dataResponseMapped = [];
                $.each(response.data.Value, function (i, objValue) {
                    var objValueMapped = angular.copy(objValue);
                    objValueMapped.DataMapped = [];
                    var aColumns = objValue.Columns;
                    var aRows = objValue.Rows;
                    $.each(aRows, function (j, objRow) {
                        var objRowMapped = {};
                        $.each(aColumns, function (k, objColumn) {
                            objRowMapped[objColumn] = objRow[k];
                        });
                        objValueMapped.DataMapped.push(objRowMapped);
                    });
                    dataResponseMapped.push(objValueMapped);
                });
                if (typeof response.data.Value !== 'undefined')
                    response.data.Value = angular.copy(dataResponseMapped);
            }
            options.success(response.data);
        }), function (response) {
            debugger;
            generalService.showToastR({
                body: aLanguage.fatalError,
                type: 'error'
            });
        };
    };

    generalService.showToastR = function (data) {
        var options = angular.extend({}, {
            'type': 'success',
            'title': '',
            'body': aLanguage.generalSuccess,
            'timeOut': '3000',
            'escapeHtml': false,
            'closeButton': true,
            'closeMethod': 'fadeOut',
            'closeDuration': 300,
            'closeEasing': 'swing',
            'onShown': function () { },
            'onHidden': function () { },
            'onclick': function () { },
            'onCloseClick': function () { },
            'preventDuplicates': true,
            'progressBar': false
        }, data);
        toastr.clear();
        switch (options.type) {
            case 'success':
                toastr.success(options.body, options.title, options);
                break;
            case 'error':
                toastr.error(options.body, options.title, options);
                break;
            case 'warning':
                toastr.warning(options.body, options.title, options);
                break;
            case 'info':
                toastr.info(options.body, options.title, options);
                break;
        }
    };

    generalService.hidePanels = function () {
        generalService.autentication.showPanel = false;
    };

    generalService.showPanels = function () {
        generalService.autentication.showPanel = true;
    };

    //BEGIN General Buttons
    generalService.hideGeneralButtons = function () {
        $rootScope.showSaveButton = false;
        $rootScope.showClearButton = false;
        $rootScope.showCancelButton = false;
        $rootScope.cancelBtnFunction = function (validateForm) {
            if (typeof validateForm === 'undefined' || (typeof validateForm !== 'undefined' && validateForm())) {
                $window.history.back();
            }
        };
    };
    //END General Buttons

    generalService.hideGeneralButtons();

    generalService.selectedLanguage = function () {
        return generalService.selectedLanguage;
    };

    return generalService;
}