/*
 * JS for yourEvents generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '96bf557e-32e1-4d20-ac3a-5655fb026817';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Club",
    "location": "Club.html"
}, {
    "name": "GitHub_Img",
    "location": "GitHub_Img.html"
}, {
    "name": "GitHub_File",
    "location": "GitHub_File.html"
}, {
    "name": "ExamplePage1426375367500",
    "location": "ExamplePage1426375367500.html"
}, {
    "name": "GitHub_Gist",
    "location": "GitHub_Gist.html"
}, {
    "name": "me",
    "location": "me.html"
}, {
    "name": "GitHub_Repo",
    "location": "GitHub_Repo.html"
}, {
    "name": "Notify",
    "location": "Notify.html"
}, {
    "name": "signIn",
    "location": "signIn.html"
}, {
    "name": "Calendar",
    "location": "Calendar.html"
}, {
    "name": "signUp",
    "location": "signUp.html"
}, {
    "name": "MaterialDesignPage",
    "location": "MaterialDesignPage.html"
}, {
    "name": "Notifications",
    "location": "Notifications.html"
}, {
    "name": "ExamplePage",
    "location": "ExamplePage.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "GitHub_Git",
    "location": "GitHub_Git.html"
}, {
    "name": "Facebook_Me",
    "location": "Facebook_Me.html"
}, {
    "name": "GitHub_Search",
    "location": "GitHub_Search.html"
}, {
    "name": "Facebook_Login",
    "location": "Facebook_Login.html"
}, {
    "name": "yourEvents",
    "location": "yourEvents.html"
}];

function yourEvents_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'logout': 'yourEvents_logout',
        'metab': 'yourEvents_metab',
        'me': 'yourEvents_me',
        'notify': 'yourEvents_notify',
        'calendar': 'yourEvents_calendar',
        'mobilelabel_4': 'yourEvents_mobilelabel_4'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["yourEvents_logouts_onbeforesend_mapping_0"] = {
        "homeScreen": "yourEvents",
        "directions": [

        {
            "from_name": "userSessionToken",
            "from_type": "SESSION_STORAGE",

            "to_name": "logouts",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['headers']['X-Appery-Session-Token']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["yourEvents_logouts_onsuccess_mapping_0"] = {
        "homeScreen": "yourEvents",
        "directions": []
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.logouts = Apperyio.datasources.logouts = new Apperyio.DataSource(UserInformation_logout_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["yourEvents_logouts_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("yourEvents");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["yourEvents_logouts_onsuccess_mapping_0"]);
            Apperyio.navigateTo('startScreen', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            var popupElement = Apperyio("mobilepopup_3");
            if (popupElement.popup("option", "positionTo") === "origin") {
                popupElement.popup("open", {
                    transition: "none",
                    positionTo: "#" + $(this).attr("id")
                });
            } else {
                popupElement.popup("open", {
                    transition: "none"
                });
            };
        }
    });

    Apperyio.CurrentScreen = 'yourEvents';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var yourEvents_onLoad = function() {
            yourEvents_elementsExtraJS();

            yourEvents_deviceEvents();
            yourEvents_windowEvents();
            yourEvents_elementsEvents();
        };

    // screen window events


    function yourEvents_windowEvents() {

        $('#yourEvents').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function yourEvents_deviceEvents() {
        document.addEventListener("deviceready", function() {

            $(document).bind("resume", function() {
                PushNotification.getPendingNotifications(function(status) {
                    var notifications = status.notifications;
                    for (var i = 0; i < notifications.length; ++i) {
                        PushNotification.notificationCallback(notifications[i]);
                    }
                });
            });

        });
    };

    // screen elements extra js


    function yourEvents_elementsExtraJS() {
        // screen (yourEvents) extra code

        /* mobilepopup_3 */
        $("#yourEvents_mobilepopup_3").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function yourEvents_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#yourEvents_mobileheader [name="logout"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        logouts.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#yourEvents_mobileheader [name="logout"]');

        $(document).off("click", '#yourEvents_mobilefooter [name="me"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'me.html';
                    }, 0);

                }
            },
        }, '#yourEvents_mobilefooter [name="me"]');
        $(document).off("click", '#yourEvents_mobilefooter [name="notify"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'Notifications.html';
                    }, 0);

                }
            },
        }, '#yourEvents_mobilefooter [name="notify"]');
        $(document).off("click", '#yourEvents_mobilefooter [name="calendar"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('yourEvents', {
                        reverse: false
                    });

                }
            },
        }, '#yourEvents_mobilefooter [name="calendar"]');

    };

    $(document).off("pagebeforeshow", "#yourEvents").on("pagebeforeshow", "#yourEvents", function(event, ui) {
        Apperyio.CurrentScreen = "yourEvents";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    yourEvents_onLoad();
};

$(document).off("pagecreate", "#yourEvents").on("pagecreate", "#yourEvents", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    yourEvents_js();
});