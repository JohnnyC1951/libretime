$(document).ready(function() {

    var dialog = $("#lang-timezone-popup");

    dialog.dialog({
            autoOpen: false,
            width: 500,
            resizable: false,
            modal: true,
            position:['center',50],
            buttons: [
                {
                    id: "setup-later",
                    text: $.i18n._("Set Later"),
                    "class": "btn",
                    click: function() {
                        $(this).dialog("close");
                    }
                },
                {
                    id: "help_airtime",
                    text: $.i18n._("OK"),
                    "class": "btn",
                    click: function() {
                        $("#lang-timezone-form").submit();
                    }
                }
            ]
    });

    var language = window.navigator.userLanguage || window.navigator.language;
    if (language === undefined) {
        language = "en_CA";
    }
    language = language.replace("-", "_");
    $("#setup_language").val(language);

    var timezone = jstz.determine();
    var timezone_name = timezone.name();
    if (timezone_name === undefined) {
        timezone_name = "America/Toronto";
    }
    $("#setup_timezone").val(timezone_name);

    dialog.dialog('open');
});
