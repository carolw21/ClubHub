/*
 * JS for Facebook_Login generated by Appery.io
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

function Facebook_Login_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton1': 'Facebook_Login_mobilebutton1'
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

    Apperyio.CurrentScreen = 'Facebook_Login';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Facebook_Login_onLoad = function() {
            Facebook_Login_elementsExtraJS();

            Facebook_Login_deviceEvents();
            Facebook_Login_windowEvents();
            Facebook_Login_elementsEvents();
        };

    // screen window events


    function Facebook_Login_windowEvents() {

        $('#Facebook_Login').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Facebook_Login_deviceEvents() {
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


    function Facebook_Login_elementsExtraJS() {
        // screen (Facebook_Login) extra code

    };

    // screen elements handler


    function Facebook_Login_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Facebook_Login_mobilecontainer1 [name="mobilebutton1"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Helper.init();;

                }
            },
        }, '#Facebook_Login_mobilecontainer1 [name="mobilebutton1"]');

    };

    $(document).off("pagebeforeshow", "#Facebook_Login").on("pagebeforeshow", "#Facebook_Login", function(event, ui) {
        Apperyio.CurrentScreen = "Facebook_Login";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Facebook_Login_onLoad();
};

$(document).off("pagecreate", "#Facebook_Login").on("pagecreate", "#Facebook_Login", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Facebook_Login_js();
});