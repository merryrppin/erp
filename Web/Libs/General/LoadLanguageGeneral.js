var languageGeneral = "es";//TODO: Se debe configurar para que este valor cargue automáticamente, dependiendo de la sesión o la lista de idioma
sDefaultLanguage = languageGeneral;

$.getScript("Libs/metronic_v6.0.9/assets/plugins/general/select2/dist/Localization/en.js");
$.getScript("Libs/metronic_v6.0.9/assets/plugins/general/select2/dist/Localization/es.js");
$.getScript("Libs/metronic_v6.0.9/assets/plugins/general/select2/dist/Localization/de.js");

function loadLanguageLibraries() {
    $.getScript("Libs/jquery-validation-1.19.2/localization/messages_" + sDefaultLanguage + ".min.js");
    $.fn.select2.defaults.set('language', sDefaultLanguage);
}

$(document).ready(function () {
    loadLanguageLibraries();//TODO: Cuando cambie el idioma, se debe llamar esta función para que vuelva a recargar el idioma
});