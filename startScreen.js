/*
 * JS for startScreen generated by Appery.io
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

// Appery.io push registration service
var _pushRegistrationApperyService = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/push/reg',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});

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
    "name": "signIn",
    "location": "signIn.html"
}, {
    "name": "Notify",
    "location": "Notify.html"
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

function startScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'plannerimage': 'startScreen_plannerimage',
        'signin': 'startScreen_signin',
        'signup': 'startScreen_signup'
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

    Apperyio.datasources = Apperyio.datasources || {};

    /*
     * Appery.io Push-notification registration service
     */
    Apperyio.mappings["_pushRegistrationApperyService_onbeforesend"] = {
        "homeScreen": "startScreen",
        "directions": [{
            "from_name": "pushNotificationToken",
            "from_type": "LOCAL_STORAGE",
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "source": "$",
                "target": "$['body']['token']"
            }]
        }, {
            "from_name": "pushNotificationDeviceID",
            "from_type": "LOCAL_STORAGE",
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "source": "$",
                "target": "$['body']['deviceID']"
            }]
        }, {
            "from_name": "deviceTimeZone",
            "from_type": "LOCAL_STORAGE",
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "source": "$",
                "target": "$['body']['timeZone']"
            }]
        }, {
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "target_transformation": function(value) {
                    return Apperyio.getProjectGUID();
                },
                "target": "$['headers']['X-Appery-App-Id']"
            }, {
                "target_transformation": function(value) {
                    return Apperyio.getTargetPlatform();
                },
                "target": "$['body']['type']"
            }]
        }]
    };

    var _registerPushApperyDS = Apperyio.datasources._registerPushApperyDS = new Apperyio.DataSource(_pushRegistrationApperyService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["_pushRegistrationApperyService_onbeforesend"]);
        },
        'onComplete': function(jqXHR, textStatus) {
            Apperyio.refreshScreenFormElements("startScreen");
        },
        'onSuccess': function(data) {
            console.info('App successfully registered with Appery.io Push service');
            $(document).trigger('pushregistrationsuccess');
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            $(document).trigger('pushregistrationfail');
        }
    });

    Apperyio.CurrentScreen = 'startScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events


    function startScreen_windowEvents() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

            $(document).bind("resume", function() {
                PushNotification.getPendingNotifications(function(status) {
                    var notifications = status.notifications;
                    for (var i = 0; i < notifications.length; ++i) {
                        PushNotification.notificationCallback(notifications[i]);
                    }
                });
            });

            $(document).bind("pushinit", function() {
                localStorage.setItem('pushNotificationToken', arguments[1].deviceToken);
                _registerPushApperyDS.execute({});
            });

            var pushNotification = PushNotification;
            pushNotification.getDeviceUniqueIdentifier(function(status) {
                localStorage.setItem('pushNotificationDeviceID', status);
            });

            var offset = new Date().getTimezoneOffset();
            var hr = parseInt(offset / (-60));
            var min = -offset - hr * 60;
            var tmin = '' + min;
            var timezone = 'UTC' + (hr > 0 ? '+' + hr : hr) + ':' + (tmin.length > 1 ? tmin : '0' + tmin);
            localStorage.setItem('deviceTimeZone', timezone);

            pushNotification.registerDevice({
                alert: true,
                badge: false,
                sound: false,
                senderid: ''
            }, function(status) {
                $(document).trigger('pushinit', status);
            });
        });
    };

    // screen elements extra js


    function startScreen_elementsExtraJS() {
        // screen (startScreen) extra code

    };

    // screen elements handler


    function startScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_mobilecontainer [name="signin"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('signIn', {
                        reverse: false
                    });

                }
            },
        }, '#startScreen_mobilecontainer [name="signin"]');
        $(document).off("click", '#startScreen_mobilecontainer [name="signup"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('signUp', {
                        reverse: false
                    });

                }
            },
        }, '#startScreen_mobilecontainer [name="signup"]');

    };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        Apperyio.CurrentScreen = "startScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    startScreen_onLoad();
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});